import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderserviceService {

  constructor() { }
  getLeaders(): Promise<Leader[]>  {
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS),2000);
  });
}
  getLeader(id:string): Promise<Leader>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((lead)=>(lead.id==id))[0]),2000);
    // provide the dish from the array
  });
}
  getFeaturedleader(): Promise<Leader>{
    return new Promise(resolve => {
      //Simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((lead)=>lead.featured)[0]),2000);

  });
}
}
