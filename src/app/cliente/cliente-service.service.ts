import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private firestore: AngularFirestore) { }

  cadastrarCliente(cliente : Cliente){
    this.firestore.collection("CLIENTES").add(cliente)
    .then((resultado =>{
      return "Sucesso ao cadastrar" + resultado;
    })).catch(Error=>{
      return "Error" + Error
    })
    
 
      console.log("Resultado do cadastro", cliente);
  }

  recuperarInformacoesCliente(identificardo: string) {
  }

  listarClientes() {

}}
