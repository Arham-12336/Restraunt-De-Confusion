import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openLoginForm(){
    this.dialog.open(LoginComponent,{width: '500px', height:'450px'})

    //This will allow us to open the dialog form for us.
    //You can also set the dialog box to be open in a default height and witdth
    // here we have define it as 450 x 500
  }

}
