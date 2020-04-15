import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PropiedadService } from '../../services/propiedad.service';
import { Propiedad } from '../../models/propiedad';
import { global } from '../../services/global';
import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from 'angular-file-uploader';

@Component({
  selector: 'app-crear-propiedad',
  templateUrl: './crear-propiedad.component.html',
  styles: [],
  providers: [UserService, PropiedadService]
})
export class CrearPropiedadComponent implements OnInit {
  public identity;
  public token;
  public propiedad: Propiedad;
  public url;
  public categories;
  public status;
  public resetVar;
  public is_edit: boolean = false;

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
      attachPinBtn: 'SUBIR IMAGEN PRINCIPAL',
      afterUploadMsg_success: 'Imagenes subidas satisfactoriamente.',
      afterUploadMsg_error: 'Error al subir archivos!'
    }
 };

  @ViewChild('fileUpload1')
   private fileUpload1: AngularFileUploaderComponent;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _propiedadService: PropiedadService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url =  global.url;
   }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.propiedad = new Propiedad(1, 1, '', '', '', '', 1, 1, 1, 1, 1, '', '', '', '', '', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png', 'default.png');
  }

  onSubmit(form){
    this._propiedadService.create(this.token, this.propiedad).subscribe(
      response => {
        if(response.status === 'success'){
          this.propiedad = response.propiedad;
          this.status = 'success';
          this._router.navigate(['/inicio']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
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
