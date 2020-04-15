export class Propiedad{
    constructor(
        public id: number,
        public category_id: number,
        public codigo: string,
        public titulo: string,
        public operacion: string,
        public ciudad: string,
        public precio: number,
        public mtstotales: number,
        public mtsconstruidos: number,
        public dormitorios: number,
        public banos: number,
        public direccion: string,
        public piscina: string,
        public bodega: string,
        public logia: string,
        public content: string,
        public image: string,
        public image1?: string,
        public image2?: string,
        public image3?: string,
        public image4?: string,
        public image5?: string,
        public image6?: string,
        public image7?: string,
        public image8?: string,
        public image9?: string,
        // public propiedades_imagenes?
    ) {
    }
}