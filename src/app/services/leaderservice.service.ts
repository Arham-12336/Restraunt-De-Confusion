import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderserviceService {

  constructor() { }
  getLeaders(): Promise<Leader[]>  {
    return Promise.resolve(LEADERS);
  }
  getLeader(id:string): Promise<Leader>{
    return Promise.resolve(LEADERS.filter((lead)=>(lead.id==id))[0]);
    // provide the dish from the array
  }
  getFeaturedleader(): Promise<Leader>{
    return Promise.resolve(LEADERS.filter((lead)=>lead.featured)[0]);

  }
}
