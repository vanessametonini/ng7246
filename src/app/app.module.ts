import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { roteamento } from './app.routes'
import { FotoService } from './servicos/foto.service'
import { FiltroPorTitulo } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PainelModule,
    FotoModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
