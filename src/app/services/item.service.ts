import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/Items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  getItems(): Observable<[]> {
   
    return  this.http.get<[]>('/assets/data.json') ;
  }
//sharing products data with other components
  getItemId(id:number):Observable<any>{
    return this.http.get<Items[]>('/assets/data.json').pipe(map(res=>{
      return res.find((item :any)=> item.id == id)
    }))
  }


}
