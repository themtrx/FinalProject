import React , { useState, useContext } from 'react'
import Wrapper from '../../components/wrapper'
import FormWrap from '../../components/formWrap'

import postImage from '../../images/addMeal.png'
import Input from '../../components/input'
import style from './index.module.css'
import Button from '../../components/button'
import cookieParse from '../../services/cookieParse'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const AddMeal = () => {
    const history = useHistory()
    const token = cookieParse.get('x-auth-token')

    const [title, setTitle] = useState('')
    const [complexity, setComplexity] = useState('')
    const [prepTime, setPrepTime] = useState(0)
    const [cookTime, setcookTime] = useState(0)
    const [servings, setServings] = useState(0)
    const [category, setCategory] = useState('')
    const [preparation, setPreparation] = useState('')
    const [imgUrl, setimgUrl] = useState('')


    const openWidget = (e) => {
        e.preventDefault()

        let widget = window.cloudinary.createUploadWidget({ 
            cloudName: "dvyudx4pv",
            uploadPreset: "firstGallery" }, 
            (error, result) => {
                if(result.event === 'success'){
                    setimgUrl(result.info.url)
                }
             });
          widget.open();
    } 

    const handleSumbit = (e) => {
        e.preventDefault()

        const data = {
            title,
            complexity,
            prepTime,
            cookTime,
            servings,
            category,
            preparation,
            imgUrl
        }

        Object.values(data).map((value) => {
            if(!value){
                toast.error('Please fill all fields and upload image')
                return
            }
            return
        })

        fetch('http://localhost:9999/api/meal', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((meal) => {
            if(meal) {
               history.push('/')
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <Wrapper>
            <FormWrap imgUrl={postImage}>
                <form className={style.form} onSubmit={handleSumbit}>
                <Input 
                    label="Title"
                    name='title'
                    type='text'
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label htmlFor="complexity">Complexity: </label>
                <select name="complexity" id="complexity" onChange={e => setComplexity(e.target.value)}>
                    <option value="">How hard?</option>
                    <option value="Easy">Easy</option>
                    <option value="Hard">Hard</option>
                    <option value="Very Hard">Very Hard</option>
                </select>
                <Input 
                    label="Prep Time"
                    name='prepTime'
                    type='number'
                    onChange={(e)=> setPrepTime(e.target.value)}
                />
                <Input 
                    label="Cook Time"
                    name='cookTime'
                    type='number'
                    onChange={(e)=> setcookTime(e.target.value)}
                />
                <Input 
                    label="Servings"
                    name='servings'
                    type='number'
                    onChange={(e)=> setServings(e.target.value)}
                />
                <Input 
                    label="Category"
                    name='category'
                    type='text'
                    onChange={(e)=> setCategory(e.target.value)}
                />
                <textarea name="preparation"
                    id="preparation"
                    rows="10"
                    onChange={(e)=> setPreparation(e.target.value)}
                    placeholder='Write your recepie here....'>
                </textarea>
                <Button name='Upload Image' handleClick={openWidget}/>
                <Button type='submit' name='Add Meal' />
                </form>
            </FormWrap>
        </Wrapper>
    )
}

export default AddMeal