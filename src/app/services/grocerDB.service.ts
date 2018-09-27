import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GrocerDBService {

  constructor(private http: HttpClient) { }

  getItem(offset = "0", limit = "50", brand) : Promise<any> {
    //console.log(filmTitle);
    const qs = new HttpParams()
      .set('offset' , offset)
      .set('limit' , limit)
      .set('brand', brand);
    return (
      this.http.get('http://localhost:3000/grocer',{params:qs})
        .pipe(take(1)).toPromise()
    );

  }
}
