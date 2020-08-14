import React, { Component } from 'react';
import style from './index.module.css'
import Wrapper from '../../components/wrapper'
import MealGrid from '../../components/mealGrid';
import UserContext from '../../services/context';

class Home extends Component {
  constructor(props){
    super(props)
  }

  static contextType = UserContext

  render(){
    return (
      <div className={style.container}>
        <Wrapper>
          <MealGrid mealURL={'meal/view'} fetchURL={'http://localhost:9999/api/meal'} />
        </Wrapper>
      </div>
    );
  }
}

export default Home;