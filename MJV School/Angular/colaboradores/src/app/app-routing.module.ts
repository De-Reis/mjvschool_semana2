import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './features/colaboradores/listagem/listagem.component';
import { HomeComponent } from './features/colaboradores/home/home.component';
import { CadastroComponent } from './features/colaboradores/cadastro/cadastro.component';
import { ContatoComponent } from './features/colaboradores/contato/contato.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'listagem', component: ListagemComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

