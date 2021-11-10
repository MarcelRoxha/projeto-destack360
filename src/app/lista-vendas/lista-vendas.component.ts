import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendas } from '../models/Vendas';
import { ServiceVendasService } from '../service-vendas.service';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {
  listavendas$!: Observable <Vendas[]>;// propriedade que pega os dados da service e coloca dentro de um Observable
  
   
  constructor(
    private vendasService: ServiceVendasService//criando a propriedade do tipo service
    //que é responsavel pela conexao e busca dos dados na nuvem

  ) { }

  ngOnInit(): void {
   // this.listavendas$!=this.vendasService.vendasf.valueChanges();
    this.listavendas$ = this.vendasService.vendasf.valueChanges();
    //inserindo os valores que vieram da nuvem no nosso Observable
  console.log( this.listavendas$._subscribe.name)
  }

}
