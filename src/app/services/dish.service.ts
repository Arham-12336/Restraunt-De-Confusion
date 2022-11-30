import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable,of, pipe } from 'rxjs';
import { delay} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { 
  
  }
  // configuring the observable
  getDishes(): Observable<Dish[]>  {
    return of(DISHES).pipe(delay(2000));
    //updated the get dishes to make use of the obervable and then 
    //convert it into a promise and send it back to the

    }

    // if the result is immediatey avaivalble to you
  
  getDish(id:string): Observable<Dish>{
    return of(DISHES.filter((dish)=>(dish.id==id))[0]).pipe(delay(2000));
    // provide the dish from the array
    //updated the get dishes to make use of the obervable and then 
    //convert it into a promise and send it back to the

  }

  getFeaturedDish(): Observable<Dish>{
    return of(DISHES.filter((dish)=>dish.featured)[0]).pipe(delay(2000));
//updated the getFeaturedDish to make use of the obervable and then 
    //convert it into a promise and send it back to the
  }
    //getDishIds is returning an observable of type string
  getDishIds(): Observable<string[] | any>{
    return of(DISHES.map(dish=>dish.id))
    //.map is a javaScript method it took the ids from each of the dishes
    // and instead of getting it one by one it will make a new array with only dish ids in it

  }
}
