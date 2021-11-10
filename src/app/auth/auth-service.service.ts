import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router   } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean;
  entraAnonimo: any;
  textoEntraAnonimo: string = "Entrada Anonima";

  constructor(private router : Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.userLoggedIn = false;
    this.afAuth.onAuthStateChanged((user: any)=>{
      if(user){
        this.userLoggedIn = true;
      }else{
        this.userLoggedIn = false;
      }
    })
   }

   loginUser(email: string, password: string): Promise<any>{
     return this.afAuth.signInWithEmailAndPassword(email, password)
     .then(()=>{
       console.log('Auth Service: LoginUser: Success');

     }).catch((error: { code: any; message: any; })=>{
      console.log('Auth Service: LoginUser: Erro');
      console.log('Error code' , error.code);
      console.log('Erro:', error);
      if(error.code){
        return {isValid: false, message: error.message};  
      }else{
        return false;
      }

     })
   }


   signup(user: any): Promise<any> {
     return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
     .then((result: any)=>{
       let emailLower = user.email.toLowerCase();
       this.afs.collection('users').doc(emailLower).set({ 
          accountType : 'endUser',    
          displayName: user.displayName,
          displayName_lower: user.displayName,
          email: user.email, 
          email_lower: emailLower
        })
       user.sendEmailVerification();
     }).catch((error: { code: any; message: any; })=>{
      console.log('Auth Service: Signup: Erro');
     
      if(error.code){
        return {isValid: false, message: error.message};  
      }else{
        return false;
      }

    })
}
eftLancerAnonimo(lancamento: any, emailUsuario : string, check: boolean): Promise<any> {
  

  if(check === true){

    return this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
      data : lancamento.datalancamentoentrada,    
      valor: lancamento.valorlancamentoentrada,
      //codentrada: lancamento.codentrada,
      //codsaida: lancamento.codsaida, 
      info: "Entrada Anonima" 
    }).then((resultado: any) =>{
      console.log("Resultado: ", resultado);
      console.log(this.textoEntraAnonimo)
    })
  }


  return this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
    data : lancamento.datalancamentoentrada,    
    valor: lancamento.valorlancamentoentrada,
    //codentrada: lancamento.codentrada,
    //codsaida: lancamento.codsaida, 
    info: this.textoEntraAnonimo.toString  
  }).then((resultado: any) =>{
    console.log("Resultado: ", resultado);
    console.log(this.textoEntraAnonimo)
  })
}

eftLancer(lancamento: any, emailUsuario : string, check: boolean): Promise<any> {

 
    return this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
      data : lancamento.datalancamentoentrada,    
      valor: lancamento.valorlancamentoentrada,
      //codentrada: lancamento.codentrada,
      //codsaida: lancamento.codsaida, 
      info: lancamento.infolancamentoentrada    
    }).then((resultado: any) =>{
      console.log("Resultado: ", resultado);
    })
  


  

}



  resetPassword(email: string, password: string): Promise<any>{
    return this.afAuth.sendPasswordResetEmail(email)
    .then(()=>{
      console.log('Auth Service: ResetPassword: Success');
    }).catch((error: { code: any; })=>{
      console.log('Auth Service: ResetPassword: Erro');
      console.log('Error code' , error.code);
      console.log('Erro:', error);
      if(error.code){
          return error
      }else{
        return "Error false"
      }
    })
  }

  async resendVericationEmail(){
      return (await this.afAuth.currentUser)?.sendEmailVerification()
        .then(()=>{
          console.log('Auth Service: resendVericationEmail: Success');
        }).catch((error: { code: any; })=>{
          console.log('Auth Service: resendVericationEmail: Erro');
          console.log('Error code' , error.code);
          console.log('Erro:', error);
          if(error.code){
              return error
          }else{
            return "Error deu falso Exception"
          }
        })
  }

 async logoutUser(): Promise<void>{
    return this.afAuth.signOut()
      .then(()=>{
        this.router.navigate(['/home']);
      }).catch(error=>{
        console.log('Auth Service: logoutUser: Erro');
        console.log('Error code' , error.code);
        console.log('Erro:', error);
        if(error.code){
          return error
      }else{
        
      }      })      
 
     
  }
  setUserInfo(playload: object){
    console.log('Auth Service: save info user: Success');
    this.afs.collection('users').add(playload).then(function (res: any){
      console.log("Auth Service: setInfo: response...");
      console.log(res);
    })
  } 
}