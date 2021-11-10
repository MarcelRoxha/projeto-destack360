import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  
  estado: boolean = true; 
   trocar(){
     this.estado = !this.estado;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
