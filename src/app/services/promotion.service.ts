import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable,of, pipe } from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]>  {
    return of(PROMOTIONS).pipe(delay(2000));
      //Simulate server latency with 2 second delay

  }
  getPromotion(id:string): Observable<Promotion>{
    return of(PROMOTIONS.filter((promo)=>{promo.id==id})[0]).pipe(delay(2000));
    // provide the dish from the array
  }
  getFeaturedPromotion(): Observable<Promotion>{
    return of(PROMOTIONS.filter((promo)=>promo.featured)[0]).pipe(delay(2000));

  }
}

