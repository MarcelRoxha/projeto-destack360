import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  
  resposta:any;
  verifica = false;// utilizada para validar o campo no formulario
  valor: any;
  maior!:string;
 //abaixo o metodo que fará o calculo e retornara para o html
 setValor(form: NgForm){
  console.log('calculando form.value.valor');
  let valor=form.value.valor;//recebe o conteudo do input do form e coloca na propriedade valor
  if (valor <= 500) {
    this.resposta =  valor - (valor*0.05);
    this.maior="alert-success";
  }else{
    this.resposta =  valor-(valor*0.1);
    this.maior="alert-danger";
  }
  this.verifica=true;
}

  constructor() { }

  ngOnInit(): void {
  }

}
