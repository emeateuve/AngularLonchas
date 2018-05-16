import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* SE IMPORTAN ESTOS MODULOS PARA HACER LAS RUTAS ENTRE COMPONENTES */
import {Routes, Router, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NoticiasComponent } from './noticias/noticias.component';

/* CREAMOS UNA VARIABLE "routes" DE TIPO "Routes", QUE PREVIAMENTE HEMOS IMPORTADO.
 * DENTRO TIENE LA ESTRUCTURA DE {PATH: (ruta), COMPONENTE: (componente al que nos referimos cuando estemos en esa ruta)}
 * CUANDO ESTEMOS EN /francisco POR EJEMPLO, NOS MOSTRARÁ EL COMPONENTE NoticiasComponent*/

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'francisco', component: NoticiasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NoticiasComponent
  ],

  /* IMPORTAMOS EL ROUTERMODULE CON ESA CONFIGURACIÓN */
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
