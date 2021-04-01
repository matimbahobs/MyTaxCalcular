import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  constructor(private http:HttpClient) {}

  calcTax(salM: number,yr:number,age:number,mem:number, taxType:Text) {
            return this.http.post('http://localhost:8080/calculator/tax?salary='+salM+'&year='+yr+'&age='+age+'&nMember='+mem+'&taxType='+taxType+'', null, httpOptions);
          }
}
