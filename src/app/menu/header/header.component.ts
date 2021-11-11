import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  user: Observable<any>; 
  isOpen = false; 
  isDisabled = false;
  clickCliente = false;   
  verificaUserLogado = false;         // Example: store the user's info here (Cloud Firestore: collection is 'users', docId is the user's email, lower case)

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router : Router) {
    this.afAuth.authState.subscribe(user => {                                                   // grab the user object from Firebase Authorization
      if (user) {
        
        let emailLower = user.email;
        let emailFormat = emailLower?.toUpperCase();
        this.user = this.firestore.collection('users').doc(emailFormat).valueChanges();
        let nomeDisplay = user.displayName        
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
  logout(): void {
    this.afAuth.signOut();
  
}
toggle(){
this.isOpen = !this.isOpen;
}

clickcliente(){
return this.clickCliente = !this.clickCliente;
}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }


}
