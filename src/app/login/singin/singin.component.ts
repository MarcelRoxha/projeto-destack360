import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth-service.service';
import { Cliente } from 'src/app/model/cliente';
import { ClienteServiceService } from 'src/app/cliente/cliente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
})
export class SinginComponent implements OnInit {
  
  isProgressVisible: boolean;
  loginForm: FormGroup;
  formCadastrarCliente : FormGroup;
  firebaseErrorMessage: string;
  user: Observable<any>;
  verificaUserLogado : boolean = false;
  clientes: any;

  constructor(private authService: AuthService, private router: Router, 
    public afAuth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private clienteServico: ClienteServiceService) {
 this.isProgressVisible = false;

      this.loginForm = new FormGroup({
          'email': new FormControl('', [Validators.required, Validators.email]),
          'password': new FormControl('', Validators.required)
      });
      this.formCadastrarCliente = new FormGroup({
        primeiroNome: new FormControl('', Validators.required),
        sobrenome: new FormControl('', Validators.required),
        displaynome: new FormControl('', Validators.required),
        emailcadastro: new FormControl('', Validators.required),
        telefone: new FormControl('', Validators.required),
        celular: new FormControl('', Validators.required),
      })


      this.firebaseErrorMessage = '';
      
  }

  ngOnInit(): void {

    this.afAuth.authState.subscribe(user => {                                                   // grab the user object from Firebase Authorization
        if (user) {
          let emailLower = user.email;
          let emailFormat = emailLower?.toUpperCase();
          this.user = this.firestore.collection('users').doc(emailFormat).valueChanges();
                 // get the user's doc in Cloud Firestore
        }
    });
  }

  cadastrarCliente(){
   
    if(this.formCadastrarCliente.valid){
      console.log(this.formCadastrarCliente.value);
      const cliente : Cliente = ({...this.formCadastrarCliente.value})
      let resultado = this.clienteServico.cadastrarCliente(cliente);
  

      if(resultado !== null){
        Swal.fire({
          title: 'Atenção, as informações foram enviadas, logo entraremos em contato pelo e-mail informado',
          width: 600,
          padding: '3em',
          background: 'src="../../assets/imagens/65ab872f-fa8e-4b2b-bdd4-376c93f02752_uploads_destacklogo.png"',
          backdrop: `
            rgba(0,0,123,0.4)
            src="../../assets/imagens/65ab872f-fa8e-4b2b-bdd4-376c93f02752_uploads_destacklogo.png"
            left top
            no-repeat
          `
        })
      }
  
      console.log("Resultado Banco: ", resultado);
     console.log("Resultado form cadastro: ", ({...this.formCadastrarCliente.value}))
     console.log("Resultado cliente: ", cliente)
      this.formCadastrarCliente.reset; 
    }else{
      Swal.fire({
        icon: 'error',
        text: 'Informações insuficientes, favor verifique as informações e tente novamente'
      })

    }

   
  }

  fecharModel(){
    this.formCadastrarCliente.reset();
  }

  loginUser() {
    this.isProgressVisible = true;                          // show the progress indicator as we start the Firebase login process
    console.log("Clicado agora");
    if (this.loginForm.invalid)
        return;

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
        this.isProgressVisible = false;                     // no matter what, when the auth service returns, we hide the progress indicator
        if (result !== null) {                               // null is success, false means there was an error
            console.log('logging in...');   
            this.verificaUserLogado = true; 
            this.router.navigate(['/home-admin']);           // when the user is logged in, navigate them to dashboard
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
}
