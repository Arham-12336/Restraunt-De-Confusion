import { Injectable } from '@angular/core';
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
    return Promise.resolve(DISHES);
    // if the result is immediatey avaivalble to you
  }
  getDish(id:string): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>(dish.id==id))[0]);
    // provide the dish from the array
  }
  getFeaturedDish(): Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>dish.featured)[0]);

  }
}
