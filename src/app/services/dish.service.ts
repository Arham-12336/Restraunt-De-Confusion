import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { 
  
  }
  // configuring the promise
  getDishes(): Promise<Dish[]>  {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES),2000);
    }
    );
    // if the result is immediatey avaivalble to you
  }
  getDish(id:string): Promise<Dish>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.id==id))[0]),2000);
    // provide the dish from the array
  });
}
  getFeaturedDish(): Promise<Dish>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(DISHES.filter((dish)=>dish.featured)[0]),2000);

  });
}
}
