import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PropiedadService } from '../../services/propiedad.service';
import { Propiedad } from '../../models/propiedad';
import { global } from '../../services/global';


@Component({
  selector: 'app-editar-propiedad',
  templateUrl: '../crear-propiedad/crear-propiedad.component.html',
  styles: [],
  providers: [UserService, PropiedadService]

})
export class EditarPropiedadComponent implements OnInit {

  public identity;
  public token; 
  public propiedad: Propiedad;
  public url;
  public categories;
  public status;
  public is_edit: boolean = true;
  public resetVar;


  public afuConfig = {
    multiple: true,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: global.url+'propiedad/upload',
      headers: {
     "Authorization" : this._userService.getToken()
      }
    },
    theme: "dragNDrop",
    hideProgressBar: false,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'SELECCIONAR IMAGENES',
      resetBtn: 'REINICIAR',
      uploadBtn: 'SUBIR IMAGENES',
      dragNDropBox: 'SUELTA LAS IMAGENES ACÁ',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Imagenes subidas satisfactoriamente.',
      afterUploadMsg_error: 'Error al subir archivos!'
    }
 };

 public afuConfig1 = {
  multiple: false,
  formatsAllowed: ".jpg, .png, .gif, .jpeg",
  maxSize: "50",
  uploadAPI:  {
    url: global.url+'propiedad/uploadPrincipal',
    headers: {
   "Authorization" : this._userService.getToken()
    }
  },
  theme: "attachPin",
  hideProgressBar: false,
  hideResetBtn: true,
  hideSelectBtn: true,
  replaceTexts: {
    selectFileBtn: 'SELECCIONAR IMAGEN PRINCIPAL',
    resetBtn: 'REINICIAR',
    uploadBtn: 'SUBIR IMAGENES',
    dragNDropBox: 'SUELTA LAS IMAGENES ACÁ',
    attachPinBtn: 'ACTUALIZAR IMAGEN',
    afterUploadMsg_success: 'Imagenes subidas satisfactoriamente.',
    afterUploadMsg_error: 'Error al subir archivos!'
  }
};


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _propiedadService: PropiedadService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url =  global.url;
    this.is_edit =  true;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.propiedad = new Propiedad(1, 1, '', '', '', '', 1, 1, 1, 1, 1, '', '', '', '', '', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png');
    this.getPropiedad();
  }

  onSubmit(form){
    this._propiedadService.update(this.token, this.propiedad, this.propiedad.id).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          // this._router.navigate(['/ficha-propiedad', this.propiedad.id]);
          console.log(this.status);
         } else {
           this.status = 'error';
           console.log(this.status);
         }
       },
       error => {
         this.status = 'error';
         console.log(this.status);
       }
    );
  }

  getPropiedad(){
    // Sacar el id del post de la url 
    this._route.params.subscribe( params =>{
      let id = +params['id'];

      // Petición ajax para sacar los datos del post
      this._propiedadService.getPropiedad(id).subscribe(
        response =>{
          if(response.status == 'success'){
            this.propiedad = response.propiedades;
          } else {
            this._router.navigate(['/inicio']);
          }
        },
        error =>{
          console.log(error);
          this._router.navigate(['/inicio']);
        }
      );
    });
  }

  imageUploadPrincipal(data){
    let image_data = JSON.parse(data.response);
    this.propiedad.image = image_data.image;
  }

  imageUpload(data){
    let image_data = JSON.parse(data.response);
    this.propiedad.image1 = image_data.image1;
    this.propiedad.image2 = image_data.image2;
    this.propiedad.image3 = image_data.image3;
    this.propiedad.image4 = image_data.image4;
    this.propiedad.image5 = image_data.image5;
    this.propiedad.image6 = image_data.image6;
    this.propiedad.image7 = image_data.image7;
    this.propiedad.image8 = image_data.image8;
    this.propiedad.image9 = image_data.image9;
  }
}
