import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Propiedad } from '../../models/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { UserService } from '../../services/user.service';

import { global } from '../../services/global';

@Component({
  selector: 'app-ficha-propiedad',
  templateUrl: './ficha-propiedad.component.html',
  styles: [],
  providers: [PropiedadService]
})
export class FichaPropiedadComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  public propiedad: Propiedad;
  public url;
  public identity;
  public token;

  constructor(
    private _propiedadService: PropiedadService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = global.url;
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
     this.getPropiedad();

  }

  // getImages() {
  //   const imageUrls = [{
  //     small: this.url + 'propiedad/image/' + this.propiedad.image,
  //     medium: this.url + 'propiedad/image/' + this.propiedad.image,
  //     big: this.url + 'propiedad/image/' + this.propiedad.image
  //   }, ]
  //   // tslint:disable-next-line: prefer-for-of
  //   for ( let i = 0; i < this.propiedad.propiedades_imagenes.length; i++ ) {
  //     imageUrls.push(
  //       {
  //       small: this.url + 'propiedad/imagenes/' + this.propiedad.propiedades_imagenes[i].file_name,
  //       medium: this.url + 'propiedad/imagenes/' + this.propiedad.propiedades_imagenes[i].file_name,
  //       big: this.url + 'propiedad/imagenes/' + this.propiedad.propiedades_imagenes[i].file_name,
  //       });
  //   }
  //   console.log(imageUrls);
  //   return imageUrls;
  // }

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

            this.galleryOptions = [
              {
                width: '430px',
                height: '300px',
                thumbnailsColumns: 3
              },
              {
                breakpoint: 800,
                width: '300px',
                height: '300px',
                thumbnailsColumns: 3
              },
              { breakpoint: 500,
                width: '300px',
                height: '300px',
                thumbnailsColumns: 3
              },
              {
                breakpoint: 300,
                width: '100%',
                height: '200px',
                thumbnailsColumns: 2 }
            ];

            // this.galleryImages = this.getImages();

            this.galleryImages = [
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image,
                medium: this.url + 'propiedad/image/' + this.propiedad.image,
                big: this.url + 'propiedad/image/' + this.propiedad.image
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image1,
                medium: this.url + 'propiedad/image/' + this.propiedad.image1,
                big: this.url + 'propiedad/image/' + this.propiedad.image1
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image2,
                medium: this.url + 'propiedad/image/' + this.propiedad.image2,
                big: this.url + 'propiedad/image/' + this.propiedad.image2
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image3,
                medium: this.url + 'propiedad/image/' + this.propiedad.image3,
                big: this.url + 'propiedad/image/' + this.propiedad.image3
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image4,
                medium: this.url + 'propiedad/image/' + this.propiedad.image4,
                big: this.url + 'propiedad/image/' + this.propiedad.image4
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image5,
                medium: this.url + 'propiedad/image/' + this.propiedad.image5,
                big: this.url + 'propiedad/image/' + this.propiedad.image5
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image6,
                medium: this.url + 'propiedad/image/' + this.propiedad.image6,
                big: this.url + 'propiedad/image/' + this.propiedad.image6
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image7,
                medium: this.url + 'propiedad/image/' + this.propiedad.image7,
                big: this.url + 'propiedad/image/' + this.propiedad.image7
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image8,
                medium: this.url + 'propiedad/image/' + this.propiedad.image8,
                big: this.url + 'propiedad/image/' + this.propiedad.image8
              },
              {
                small: this.url + 'propiedad/image/' + this.propiedad.image9,
                medium: this.url + 'propiedad/image/' + this.propiedad.image9,
                big: this.url + 'propiedad/image/' + this.propiedad.image9
              },
            ];


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

}
