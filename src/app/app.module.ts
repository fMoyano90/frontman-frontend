import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import {NgxPaginationModule} from 'ngx-pagination';
import { EllipsisModule } from 'ngx-ellipsis';

// Configuración para Chile

import { registerLocaleData } from '@angular/common';
import localeEsCl from '@angular/common/locales/es-CL';
registerLocaleData(localeEsCl, 'es-Cl');



// PIPES
import { SeparadorPipe } from './pipes/separador.pipe';

// RUTAS
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ArriendosComponent } from './components/arriendos/arriendos.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearPropiedadComponent } from './components/crear-propiedad/crear-propiedad.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingComponent } from './components/landing/landing.component';
import { FichaPropiedadComponent } from './components/ficha-propiedad/ficha-propiedad.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';

import { IdentityGuard } from './services/identity.guard';
import { UserService } from './services/user.service';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';
import { PropiedadService } from './services/propiedad.service';
import { EditarPropiedadComponent } from './components/editar-propiedad/editar-propiedad.component';
import { CorreoService } from './services/correo.service';
import { BuscarComponent } from './components/buscar/buscar.component';
import { BusquedaService } from './services/busqueda.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ArriendosComponent,
    VentasComponent,
    ContactoComponent,
    CrearPropiedadComponent,
    LoginComponent,
    RegistroComponent,
    LandingComponent,
    FichaPropiedadComponent,
    SideBarComponent,
    SeparadorPipe,
    SubirImagenesComponent,
    EditarPropiedadComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    NgxGalleryModule,
    HttpClientModule,
    NgxDropzoneModule,
    AngularFileUploaderModule,
    NgxPaginationModule,
    EllipsisModule
  ],
  providers: [
    IdentityGuard,
    UserService,
    PropiedadService,
    CorreoService,
    BusquedaService,
    { provide: LOCALE_ID, useValue: 'es-Cl' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
