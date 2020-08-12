import React from 'react';
import style from './index.module.css'
import Wrapper from '../../components/wrapper'
import MealGrid from '../../components/mealGrid';

function Unpublished() {
  return (
    <div className={style.container}>
      <Wrapper>
        <MealGrid mealURL={'meal/review'} fetchURL={'http://localhost:9999/api/meal/unpublished'} />
      </Wrapper>
    </div>
  );
}

export default Unpublished;