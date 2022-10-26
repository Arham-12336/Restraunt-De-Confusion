import { Component, OnInit,Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish:Dish;
  

  constructor(private dishService: DishService,private route: ActivatedRoute, private location: Location) { }

  ngOnInit() { //urls will be dishdetail 0
    let id= this.route.snapshot.params['id'];
    this.dish=this.dishService.getDish(id)
  }

  goback(): void{
    this.location.back();
    //This will help us in getiing back through using a function back
  }

}

// We have used the input to get information into a component from
// another component