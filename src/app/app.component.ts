import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sideBarOpen = true;

  isProgressVisible: boolean;
  loginForm: FormGroup;
  firebaseErrorMessage: string;
  user: Observable<any>;
  verificaUserLogado : boolean = false;

  constructor(private authService: AuthService, private router: Router, public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
 this.isProgressVisible = false;

      this.loginForm = new FormGroup({
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required)
      });

      this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {

    this.afAuth.authState.subscribe(user => {                                                   // grab the user object from Firebase Authorization
        if (user) {

            let emailLower = user.email;
            let emailFormat = emailLower?.toUpperCase()
            this.user = this.firestore.collection('users').doc(emailFormat).valueChanges();
                 // get the user's doc in Cloud Firestore
        }
    });

  }

  loginUser() {
    this.isProgressVisible = true;                          // show the progress indicator as we start the Firebase login process

    if (this.loginForm.invalid)
        return;

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
        this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
        if (result !== null) {                               // null is success, false means there was an error
            console.log('logging in...');   
            this.verificaUserLogado = true;            // when the user is logged in, navigate them to dashboard
        }
        else if (result.isValid == false) {
            console.log('login error', result);
            this.firebaseErrorMessage = result.message;
            this.verificaUserLogado = false; 
        }
    });
}


  logout(): void {
      this.afAuth.signOut();
  }



  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
