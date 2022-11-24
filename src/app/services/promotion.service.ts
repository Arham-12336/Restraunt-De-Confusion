import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>  {
    return Promise.resolve(PROMOTIONS);
  }
  getPromotion(id:string): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>{promo.id==id})[0]);
    // provide the dish from the array
  }
  getFeaturedPromotion(): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>promo.featured)[0]);

  }
}
