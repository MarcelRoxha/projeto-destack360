import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CalculoComponent } from './calculo/calculo.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { DiretivangforComponent } from './diretivangfor/diretivangfor.component';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ListaVendasComponent } from './lista-vendas/lista-vendas.component';
import { HomeUserComponent } from './home/home-user/home-user.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { LancarEntradaComponent } from './lancar/lancar-entrada/lancar-entrada.component';
import { LancarSaidaComponent } from './lancar/lancar-saida/lancar-saida.component';
import { ContaEntradaComponent } from './conta/conta-entrada/conta-entrada.component';
import { ContaSaidaComponent } from './conta/conta-saida/conta-saida.component';
//----------------------------MATERIAL DESIGN-------------------------//


import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { SinginComponent } from './login/singin/singin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CalculoComponent,
    NgifComponent,
    DiretivangforComponent,
    ListaVendasComponent,
    HomeUserComponent,
    HomeAdminComponent,
    ClienteListComponent,
    ClienteEditComponent,
    UsuarioListComponent,
    UsuarioEditComponent,
    LancarEntradaComponent,
    LancarSaidaComponent,
    ContaEntradaComponent,
    ContaSaidaComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
       })

    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
