import { Component, OnInit,Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish:Dish;
    dishIds: string[];
    prev:string;
    next:string;
  

  constructor(private dishService: DishService,private route: ActivatedRoute, private location: Location) { }

  ngOnInit() { //urls will be dishdetail 0
    //The activated route services provide a observable name params and what
    // this params do is way of obtaining the parameters value with in my urls
    this.dishService.getDishIds()
    .subscribe((dishIds)=>this.dishIds=dishIds);
    this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
    //whenever the route paramtere changes the value the switchMap will immediatilty takes the values 
    .subscribe(dish=>{this.dish=dish;
    this.setPrevNext(dish.id)
    });

  } 
  // making use of a obervable to transform to on to another

  setPrevNext(dishId:string)
  {
    const index=this.dishIds.indexOf(dishId);
    //indexof methods takes the value of the dishId and looks into the array
    this.prev=this.dishIds[(this.dishIds.length+ index-1)*this.dishIds.length]
    this.next=this.dishIds[(this.dishIds.length+ index+1)*this.dishIds.length]
  }

  goback(): void{
    this.location.back();
    //This will help us in getiing back through using a function back
  }

}

// We have used the input to get information into a component from
// another component