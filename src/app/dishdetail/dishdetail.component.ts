import { Component, OnInit,} from '@angular/core';
import { Dish } from '../shared/dish';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import {switchMap} from 'rxjs/operators';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import {Comment} from '../shared/comment';
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

    commentForm: FormGroup;
    comment: Comment;
    formErrors = {
      author: '' ,
      rating: 5 ,
      comment: ''
    };
    validationMessages = {
      'author': {
        'required': 'Author is required.' ,
        'minlength': 'Author must be at least 2 characters long.'
      } ,
      'comment': {
        'required': 'comment is required.' ,
        'minlength': 'comment must be at least 2 characters long.'
      } ,
    };
  

  constructor(private dishService: DishService,private route: ActivatedRoute, private location: Location,private fb: FormBuilder) { 
    this.createForm();
  }

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
  private createForm(): void {
    this.commentForm = this.fb.group({
      author: ['' , [Validators.required , Validators.minLength(2)]] ,
      rating: 5 ,
      comment: ['' , [Validators.required , Validators.minLength(2)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
    this.commentForm.reset({
      author: '' ,
      rating: 5 ,
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}

// We have used the input to get information into a component from
// another component