import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Vendas } from './models/Vendas';

@Injectable({
  providedIn: 'root'
})
export class ServiceVendasService {
  vendasf!: AngularFirestoreCollection<Vendas>; //busca o dados da nuvem e agrega a Nossa Model

  constructor(
    private db: AngularFirestore // responsavel pela conexao
  ) {this.setAlunos(); }

  setAlunos() {
    this.vendasf = this.db.collection<Vendas>('/venda');
    // buscando o banco na nuvem ou seja o caminho onde esta o banco
     //veja que aqui nao colocamos o Osevable isso vai no componente que lista os 
     //elementos
   }
}
