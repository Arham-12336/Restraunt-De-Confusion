import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
//The view child will help me to get a child from the DOM

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
//This will host the reactive form
feedbackForm:FormGroup;
feedback:Feedback;
contactType=ContactType;
@ViewChild('fform') feedbackFormDirective;

//To reset the form in its initial value

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm=this.fb.group({
      firstname:['',Validators.required],
      listname:['',Validators.required],
      telenum:[0,Validators.required],
      email:['',Validators.required],
      agree:false,
      contacttype:'None',
      message:''
    }); 
    

  }
  onSubmit() { 
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contacttype:'None',
      message:''
    });
    // this.feedbackFormDirective.resetForm();

  }

}
