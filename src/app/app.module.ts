import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule, BuiltInOptions } from 'ngx-bootstrap-modal';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './body/lista/lista.component';
import { DetaleComponent } from './body/lista/detale/detale.component';
import { ElementComponent } from './body/lista/element/element.component';
import { ZamowComponent } from './body/zamow/zamow.component';
import { JakZamowicComponent } from './body/jakzamowic/jakzamowic.component';
import { ProduktyComponent } from './body/produkty/produkty.component';
import { MenuListyComponent } from './body/lista/menulisty/menulisty.component';
import { OfirmieComponent } from './body/ofirmie/ofirmie.component';

import { ListaProduktowService } from './shared/listaProduktow.service';
import { MenuService } from './shared/menu.service';
import { ListaDresowkiService } from './shared/listaDresowki.service';
import {  DresowkaComponent } from './body/jakzamowic/dresowka/dresowka.component';
import { ListaTkaninService } from './shared/listaTkanin.service';
import { TkaninyComponent } from './body/jakzamowic/tkaniny/tkaniny.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/produkty', pathMatch: 'full' },
  { path: 'produkty', component: ListaComponent },
  { path: 'jakzamowic', component: JakZamowicComponent },
  { path: 'ofirmie', component: OfirmieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent,
    ListaComponent,
    DetaleComponent,
    ElementComponent,
    ZamowComponent,
    JakZamowicComponent,
    ProduktyComponent,
    MenuListyComponent,
    OfirmieComponent,
    DresowkaComponent,
    TkaninyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [MenuService, ListaProduktowService, ListaDresowkiService, ListaTkaninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
