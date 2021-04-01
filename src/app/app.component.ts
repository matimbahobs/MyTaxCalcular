import { Component } from '@angular/core';
import { from } from 'rxjs';
import { TaxCalculatorService } from './tax-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTaxCalcular';

  salM : number;
  yr : any;
  age : any;
  mem : any;
  calculatedTax:any;
  taxType:any;
 
  constructor(private taxCalculatorService: TaxCalculatorService) { }

  onSave(){

    this.taxCalculatorService.calcTax(this.salM,this.yr,this.age,this.mem, this.taxType).subscribe(
      s => this.calculatedTax=s);

    
  }

}
