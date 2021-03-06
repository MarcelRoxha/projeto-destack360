import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth-service.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: Observable<any>;  
  loginForm: FormGroup; 
  isProgressVisible: boolean;
  lancerForm: FormGroup;
  firebaseErrorMessage: string;
  clickDashBoard = false; 
  isOpen = false; 
  clickEfetuarLancamentoSaida = false;
  clickEfetuarLancamentoEntrada = false;
  dataRecuperada : string;

  isDisabled = false;
  clickCliente = false;   
  verificaUserLogado = false;         // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router : Router) {
    this.afAuth.authState.subscribe(user => {                                                   // grab the user object from Firebase Authorization
      if (user) {
        let nomeDisplay = user.displayName
        let emailLower = user.email;
        let emailFormat = emailLower?.toUpperCase();
        this.user = this.firestore.collection('users').doc(emailFormat).valueChanges();
        this.verificaUserLogado = true;
        console.log("Entrou um header: " + nomeDisplay)        // get the user's doc in Cloud Firestore
      }
  });
  }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(user => {                                                   // grab the user object from Firebase Authorization
          if (user) {
            let nomeDisplay = user.displayName
            let emailLower = user.email;
            let emailFormat = emailLower?.toUpperCase();
            this.user = this.firestore.collection('users').doc(emailFormat).valueChanges();
            console.log("Entrou um header: " + nomeDisplay)        // get the user's doc in Cloud Firestore
          }
      });
  }

  toggle(){
    this.isOpen = !this.isOpen;
    }

    efetuarLancamentoSaida(){  
      this.clickEfetuarLancamentoEntrada = !this.clickEfetuarLancamentoEntrada;        
     return this.clickEfetuarLancamentoSaida = !this.clickEfetuarLancamentoSaida;
           
    }

    efetuarLancamentoEntrada(){
      return this.router.navigate(['/lancar'])
     
    }

    retornarData(){
      console.log(this.lancerForm.value) 
    }

    acessarInicio(){
      return this.router.navigate(['/dashboard'])
    }
}
