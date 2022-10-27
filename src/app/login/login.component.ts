import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
//This will enable us in create a dialog menue

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={username: '',pasword: '',remember: false}

  constructor(public dialogRef:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('User: ',this.user);
    this.dialogRef.close();
  }  

}
