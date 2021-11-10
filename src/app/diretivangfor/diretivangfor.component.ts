import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivangfor',
  templateUrl: './diretivangfor.component.html',
  styleUrls: ['./diretivangfor.component.css']
})
export class DiretivangforComponent implements OnInit {
  vetor : number[] =[1, 2, 3,  4, 5 ]; // declarando vetor
  constructor() { }

  ngOnInit(): void {
  }

}
