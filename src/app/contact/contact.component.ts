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


//we have used this javascript object whenerve th error is generated we will use these strings to show
// thsi will allow me to track each error elements in my form
formError={
  'firstname':'',
  'lastname':'',
  'telnum':'',
  'email': ''
}; 

//error messages
validationMessages={
'firstname':{
  'required':'First name is required',
  'minlength': 'Firstname must be minimum 2 character long',
  'maxlength': 'Firstname cannot be more than 25 characters'
},
'lastname':{
  'required':'last name is required',
  'minlength': 'lastname must be minimum 2 character long',
  'maxlength': 'lastname cannot be more than 25 characters'
},
'telnum':{
  'required': 'Tel is required',
  'pattern': 'Tel number mus t contain only numbers'
},
'email':{
  'required':'Email is required',
  'email': 'Email not valid'
}
};


//To reset the form in its initial value

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.feedbackForm=this.fb.group({
      firstname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum:[0,[Validators.required,Validators.pattern]], //Pattern allows you to validate that the enter value is according to the pattern
      email:['',[Validators.required,Validators.email]],
      agree:false,
      contacttype:'None',
      message:''
    }); 

    this.feedbackForm.valueChanges
    .subscribe(data=> this.onValueChanged(data));

    this.onValueChanged(); //reset form validation messages
    

  }
  onValueChanged(data?: any){
    if(!this.feedbackForm){
      return;
      //If the form is not created
    }
    const form=this.feedbackForm;
    //checked the 4 errors
    for (const field in this.formError){
      if(this.formError.hasOwnProperty(field)){
        //clear previous messages if any
        this.formError[field]='';
        const control=form.get(field);
        if (control && control.dirty && !control.valid) //we are gonna check that what is the state of every field
        {
          const messages=this.validationMessages[field];
          for (const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formError[field]+=messages[key]+'';
            }
          }
         }
      }

    }
    //By doing this that particular message will get attached to the corresponding error

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
