import React from 'react';
import style from './index.module.css'
import Wrapper from '../../components/wrapper'
import MealGrid from '../../components/mealGrid';

function Home() {
  return (
    <div className={style.container}>
      <Wrapper>
        <MealGrid />
      </Wrapper>
    </div>
  );
}

export default Home;