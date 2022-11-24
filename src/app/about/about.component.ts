import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderserviceService } from '../services/leaderservice.service';
//include all the components to be used in my component


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];  

  constructor(private leaderServices:LeaderserviceService) { }

  ngOnInit() {
    this.leaderServices.getLeaders()
    .then((leaders)=>this.leaders=leaders);
  }
  //This will give me access to all the leaders array

}
