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

 
  constructor(private router : Router) {
   
  }

  ngOnInit(): void {
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
