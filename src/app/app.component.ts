import { Component, OnDestroy, ViewChild } from '@angular/core';
import { EncabezadoComponent } from './shared/encabezado/encabezado.component';
//src\app\shared\encabezado\encabezado.component.ts


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy{

  valorInformacion:string = 'Información de Contacto test';
  handleEvent(eventData: string) {
    console.log('Evento recibido del componente hijo:', eventData);
  }

  productos: any[] = [
    {
      id: 1,
      nombre: 'VINO SENDEROS DEL CONDOR',
      precio: 10,
      img: 'https://bolsadeproductos.com.ec/wp-content/uploads/classified-listing/2022/03/VINOS-SENDEROS-DEL-CONDOR.jpg'
    },
    {
      id: 2,
      nombre: 'PAJARO AZUL',
      precio: 13,
      img: 'https://licoreschullavida.com/wp-content/uploads/2020/07/pajaro-azul.jpg'
    },
    {
      id: 3,
      nombre: 'NORTEÑO',
      precio: 5,
      img: 'https://licoreschullavida.com/wp-content/uploads/2020/07/norteno-375-ml.jpg'
    },
    {
      id: 4,
      nombre: 'WHISKY OLD TIMES',
      precio: 11.30,
      img: 'https://licorstore.ec/quito/wp-content/uploads/sites/14/2020/09/WOT-black-750-caja-300x300.jpg'
    },
    {
      id: 5,
      nombre: 'RON SAN MIGUEL ORO ',
      precio: 8.50,
      img: 'https://laguarda.com.ec/wp-content/uploads/2017/12/Oro.jpg'
    },
    {
      id: 6,
      nombre: 'CRISTAL AGUARDIENTE',
      precio: 15,
      img: 'https://lataberna.com.ec/cuenca/remigio-crespo/5810-large_default/cristal-aguardiente-1960-750ml.jpg'
    },
    {
      id: 7,
      nombre: 'WHISKEY JACK DANIELS',
      precio: 32.49,
      img: 'https://jumbo.vtexassets.com/arquivos/ids/507789/Whiskey-Jack-Daniels-40%C2%B0-botella-1-L.jpg?v=637974708934730000'
    },
    {
      id: 8,
      nombre: 'JAGERMEISTER',
      precio: 30,
      img: 'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/elgrancatador/7/7-cocteles-con-Jagermeister.jpg'
    },
    {
      id: 9,
      nombre: 'AGUARDIENTE CAÑA MANABITA',
      precio: 9,
      img: 'https://laguarda.com.ec/wp-content/webpc-passthru.php?src=https://laguarda.com.ec/wp-content/uploads/2017/12/Aguardiente-Faja-Negra-600x600.jpg&nocache=1'
    },
  ];

  @ViewChild(EncabezadoComponent) encabezadoComponent!: EncabezadoComponent;

  nombrePersona: string = '';
  comentario: string = '';
  comentarios: any[] = [];

  agregarComentario() {
    if (this.nombrePersona && this.comentario) {
      const nuevoComentario = {
        nombrePersona: this.nombrePersona,
        comentario: this.comentario
      };
      this.comentarios.push(nuevoComentario);
      this.nombrePersona = '';
      this.comentario = '';
    }
  }

  ngOnDestroy(): void {
   this.productos = [];
  }

}
