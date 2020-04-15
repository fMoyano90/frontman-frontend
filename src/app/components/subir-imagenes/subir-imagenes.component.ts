import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Propiedad } from '../../models/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { global } from '../../services/global';
import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from 'angular-file-uploader';

@Component({
  selector: 'app-subir-imagenes',
  templateUrl: './subir-imagenes.component.html',
  styles: []
})
export class SubirImagenesComponent implements OnInit {

  public propiedad: Propiedad;
  public url;
  public identity;
  public token;
  public status;
  public resetVar;
  public id;
  public afuConfig;

  @ViewChild('fileUpload1')
    private fileUpload1: AngularFileUploaderComponent;

  constructor(
    private _propiedadService: PropiedadService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
   }

  ngOnInit() {
    this.getConfig();
    this.getPropiedad();
  }

  getPropiedad() {
    // Sacar el id del post de la url 
    this._route.params.subscribe( params => {
      let id = +params['id'];

      // Petición ajax para sacar los datos de la propiedad
      this._propiedadService.getPropiedad(id).subscribe(
        response => {
          if (response.status === 'success'){
            this.propiedad = response.propiedades;
            console.log(this.propiedad);
          } else {
            this._router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/inicio']);
        }
      );
    });

  }

  getConfig() {

  // Sacar el id del post de la url 
  this._route.params.subscribe( params => {
    let id: any = +params['id'] || null;
    let urls = global.url + 'propiedad/' + id + '/imagenes';

    this.afuConfig = {
      multiple: true,
      formatsAllowed: ".jpg, .png, .gif, .jpeg",
      maxSize: "50",
      uploadAPI:  {
        url: urls,
        headers: {
       "Authorization" : this._userService.getToken()
        }
      },
      theme: "dragNDrop",
      hideProgressBar: false,
      hideResetBtn: false,
      hideSelectBtn: false,
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'REINICIAR',
        uploadBtn: 'SUBIR IMAGEN',
        dragNDropBox: 'SUELTA LA IMAGEN ACÁ',
        attachPinBtn: 'Attach Files...',
        afterUploadMsg_success: 'Imagen subida satisfactoriamente, presiona reiniciar para subir otra.',
        afterUploadMsg_error: 'Error al subir archivo!'
      }
  };
  });

  }

  imageUpload(data){
    console.log(data.response);
    this.fileUpload1.resetFileUpload();
    // let image_data = JSON.parse(data.response);
    // this.propiedad.propiedades_imagenes.file_name = image_data.image;
  }
}
