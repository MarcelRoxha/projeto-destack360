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

   async loginUser(email: string, password: string): Promise<any>{
     
     try {
       (await this.afAuth.signInWithEmailAndPassword(email, password));
       console.log('Auth Service: LoginUser: Success');
     } catch (error) {
       console.log('Auth Service: LoginUser: Erro');
       console.log('Error code', error);
       console.log('Erro:', error);
       if (error) {
         return { isValid: false, message: error };
       } else {
         return false;
       }
     }
   }


   async signup(user: any): Promise<any> {
     try {
       const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
       let emailLower = user.email.toLowerCase();
       this.afs.collection('users').doc(emailLower).set({
         accountType: 'endUser',
         displayName: user.displayName,
         displayName_lower: user.displayName,
         email: user.email,
         email_lower: emailLower
       });
       user.sendEmailVerification();
     } catch (error) {
       console.log('Auth Service: Signup: Erro');

       if (error) {
         return { isValid: false, message: error };
       } else {
         return false;
       }
     }
}
  async eftLancerAnonimo(lancamento: any, emailUsuario : string, check: boolean): Promise<any> {
  

  if(check === true){

    const resultado = await this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
      data: lancamento.datalancamentoentrada,
      valor: lancamento.valorlancamentoentrada,
      //codentrada: lancamento.codentrada,
      //codsaida: lancamento.codsaida, 
      info: "Entrada Anonima"
    });
    console.log("Resultado: ", resultado);
    console.log(this.textoEntraAnonimo);
  }


  const resultado_1 = await this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
    data: lancamento.datalancamentoentrada,
    valor: lancamento.valorlancamentoentrada,
    //codentrada: lancamento.codentrada,
    //codsaida: lancamento.codsaida, 
    info: this.textoEntraAnonimo.toString
  });
  console.log("Resultado: ", resultado_1);
  console.log(this.textoEntraAnonimo);
}

  async eftLancer(lancamento: any, emailUsuario : string, check: boolean): Promise<any> {

 
    const resultado = await this.afs.collection('users').doc(emailUsuario).collection('lancamento_entrada').doc().set({
    data: lancamento.datalancamentoentrada,
    valor: lancamento.valorlancamentoentrada,
    //codentrada: lancamento.codentrada,
    //codsaida: lancamento.codsaida, 
    info: lancamento.infolancamentoentrada
  });
  console.log("Resultado: ", resultado);
  


  

}



  async resetPassword(email: string, password: string): Promise<any>{
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      console.log('Auth Service: ResetPassword: Success');
    } catch (error) {
      console.log('Auth Service: ResetPassword: Erro');
      console.log('Error code', error);
      console.log('Erro:', error);
      if (error) {
        return error;
      } else {
        return "Error false";
      }
    }
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