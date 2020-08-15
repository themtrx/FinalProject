import React, {useState, useEffect }  from 'react'
import { useParams} from 'react-router-dom'
import Wrapper from '../../components/wrapper'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MealGrid from '../../components/mealGrid'

import noAvatar from '../../images/avatar.png'
import style from './index.module.css'



const ProfilePage = () => {

    const [username, setUsername] = useState(null)
    const [meals, setMeals] = useState(null)
    const [reviewedMeals, setReviewedMeals] = useState(0)
    const [level, setLevel] = useState('Observer')
    const [avatar, setAvatar] = useState(null)

    const params = useParams()

    useEffect(()=> {
        const id = params.id
        fetch(`http://localhost:9999/api/user/${id}`)
        .then((res) =>{
            return res.json()
        })
        .then((user) => {

            if(user){
                setUsername(user.username)
                setMeals(user.meals)
                setReviewedMeals(user.reviewedMeals)
                setLevel(user.level)
                
                if(!user.avatar) {
                    setAvatar(noAvatar)
                }else {
                    setAvatar(user.avatar)
                }

            }
        })

    }, [])

    const openWidget = () => {
        const id = params.id
        let widget = window.cloudinary.createUploadWidget({ 
            cloudName: "dvyudx4pv",
            uploadPreset: "firstGallery" }, 
            (error, result) => {
                if(result.event === 'success'){
                    setAvatar(result.info.url)

                    fetch(`http://localhost:9999/api/user/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            avatar: result.info.url
                        }),
                    })
                    .then((res) => res.json())
                    .catch((err) =>  console.log(err))
                }
             });
          widget.open();
    } 

    return(
        <Wrapper>
            <div className={style.profile}>
                <Tabs selectedTabClassName={style.activeTab}>
                    <TabList>
                        <Tab>Personal Info</Tab>
                        <Tab>Meals</Tab>
                    </TabList>

                    <TabPanel>
                        <div className={style.profileInfo}>
                            <img src={`${avatar}`} alt=""/>
                            <button onClick={openWidget}>Upload Image </button>
                            <h3>{username}</h3>
                            <h4><span>Chef level: </span> {level}</h4>
                            <p><span>Meals Count: </span>{meals? meals.length: 0}</p>
                            <p><span>Reviewed Meals: </span>{reviewedMeals? reviewedMeals.length: 0}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <MealGrid mealURL={'meal/view'} mealsArr={meals} />
                    </TabPanel>
                </Tabs>
            </div>
        </Wrapper>
    )
}

export default ProfilePage