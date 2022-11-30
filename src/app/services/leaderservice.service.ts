import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable,of, pipe } from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderserviceService {

  constructor() { }
  getLeaders(): Observable<Leader[]>  {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id:string): Observable<Leader>{
    return of(LEADERS.filter((lead)=>(lead.id==id))[0]).pipe(delay(2000));
    // provide the dish from the array
  }
  getFeaturedleader(): Observable<Leader>{
    return of(LEADERS.filter((lead)=>lead.featured)[0]).pipe(delay(2000));

  }
}

