import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compostos',
  templateUrl: './compostos.component.html',
  styleUrls: ['./compostos.component.css']
})
export class CompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;

  constructor() { 
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {
  }

  getJuros(){
    return this.vp * (1 + this.j/100 * this.n)
  }

  getCompostos(){
    let formula = (Math.pow(1 + this.j/100,this.n));
    let final = ((this.vp)*(formula));
    let rendimento = ((final)-(this.vp));
    let jc: Number = ((this.vp)+(rendimento));
    let total = (jc.toFixed(2));
      return total;
    }
    
    Acumulados() {
      let list: number[] = [];
      let formula = (Math.pow(1 + this.j/100,this.n));
      let final = ((this.vp)*(formula));
      let rendimento = ((final)-(this.vp));
      let total = rendimento;
        for (let i = 0; i < this.n; i++) {
          total = (this.vp*((1+this.j/100)**(i+1))-this.vp);
          list.push(Number(total.toFixed(2)));
          total = (total);
        }
        return list;
      }
}





