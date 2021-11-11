import { HomeUserComponent } from './home/home-user/home-user.component';
import { SinginComponent } from './login/singin/singin.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { ContaSaidaComponent } from './conta/conta-saida/conta-saida.component';
import { ContaEntradaComponent } from './conta/conta-entrada/conta-entrada.component';
import { LancarSaidaComponent } from './lancar/lancar-saida/lancar-saida.component';
import { LancarEntradaComponent } from './lancar/lancar-entrada/lancar-entrada.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoComponent } from './calculo/calculo.component';
import { DiretivangforComponent } from './diretivangfor/diretivangfor.component';
import { HomeComponent } from './home/home.component';
import { NgifComponent } from './ngif/ngif.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  
  { path: 'singin', component: SinginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home-user', component: HomeUserComponent , canActivate: [AuthGuard]}, // caminhos dos componentes a serem associados os links do app component
  { path: 'calculo', component: CalculoComponent, canActivate: [AuthGuard]},
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuard]},
  { path: 'lampada', component: NgifComponent, canActivate: [AuthGuard]},
  { path: 'repete', component: DiretivangforComponent, canActivate: [AuthGuard]},
  { path: 'cliente-list', component: ClienteListComponent , canActivate: [AuthGuard]}, // caminhos dos componentes a serem associados os links do app component
  { path: 'cliente-edit', component: ClienteEditComponent, canActivate: [AuthGuard]},
  { path: 'usuario-list', component: UsuarioListComponent, canActivate: [AuthGuard]},
  { path: 'usuario-edit', component: UsuarioEditComponent, canActivate: [AuthGuard]},
  { path: 'lancar-entrada', component: LancarEntradaComponent, canActivate: [AuthGuard]},
  { path: 'lancar-saida', component: LancarSaidaComponent, canActivate: [AuthGuard]},
  { path: 'conta-entrada', component: ContaEntradaComponent, canActivate: [AuthGuard]},
  { path: 'conta-saida', component: ContaSaidaComponent, canActivate: [AuthGuard]},

  { path: '', redirectTo: '/singin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
