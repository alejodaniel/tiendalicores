import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceTestService } from 'src/app/services/service-test.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {


  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

  emitEvent() {
    this.myEvent.emit('Este es el valor del evento desde el componente hijo');
  }
  constructor(private service: ServiceTestService) {

  }
  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      console.log('DATA: ', data);
    });
  }



  imagenUrl = 'https://images.vexels.com/media/users/3/136295/isolated/preview/9293787a09b95e84c856e6474cff8ce0-marca-de-licorer-a.png';


  carritoProductos: any[] = []; // Arreglo para almacenar los productos del carrito

  // Método para agregar un producto al carrito
  agregarProducto(producto: any) {
    this.carritoProductos.push(producto);
  }

  // Método para eliminar un producto del carrito
  eliminarProducto(id: number) {
    this.carritoProductos = this.carritoProductos.filter((producto) => producto.id !== id);
  }
}
