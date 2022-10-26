import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderserviceService {

  constructor() { }
  getLeaders(): Leader[]  {
    return LEADERS;
  }
  getLeader(id:string): Leader{
    return LEADERS.filter((lead)=>(lead.id==id))[0];
    // provide the dish from the array
  }
  getFeaturedleader(): Leader{
    return LEADERS.filter((lead)=>lead.featured)[0];

  }
}
