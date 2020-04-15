import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LandingComponent } from './components/landing/landing.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LoginComponent } from './components/login/login.component';
import { FichaPropiedadComponent } from './components/ficha-propiedad/ficha-propiedad.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ArriendosComponent } from './components/arriendos/arriendos.component';
import { CrearPropiedadComponent } from './components/crear-propiedad/crear-propiedad.component';
import { SubirImagenesComponent } from './components/subir-imagenes/subir-imagenes.component';
import { EditarPropiedadComponent } from './components/editar-propiedad/editar-propiedad.component';
import { IdentityGuard } from './services/identity.guard';
import { BuscarComponent } from './components/buscar/buscar.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '$assfcxrg&&tgadfzx112312aasda+9@q/registro', component: RegistroComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'crear-propiedad', component: CrearPropiedadComponent, canActivate: [IdentityGuard] },
    { path: 'subir-imagenes/:id', component: SubirImagenesComponent, canActivate: [IdentityGuard] },
    { path: 'confiar-propiedad', component: LandingComponent },
    { path: 'sobre-nosotros', component: NosotrosComponent },
    { path: 'ficha-propiedad/:id', component: FichaPropiedadComponent },
    { path: 'propiedades-en-venta/:id', component: VentasComponent },
    { path: 'propiedades-en-arriendo/:id', component: ArriendosComponent },
    { path: 'busqueda', component: BuscarComponent },
    { path: 'editar-propiedad/:id', component: EditarPropiedadComponent, canActivate: [IdentityGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout/:sure', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled', useHash: true});
