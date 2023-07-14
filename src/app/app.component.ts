import { Component, OnInit } from '@angular/core';
import { Producto } from './core/interfaces/interfaces';
import { ProductosService } from './core/services/productos/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{

  constructor(
    private productosService: ProductosService
  ){}

  title = 'Ejercicio_de_Angular';

  listaDeProductos: Producto[] = [
    {nombre: "Smart Tv 32 Philips", costo: "$ 67000"},
    {nombre:"Disco sólido interno Kingston", costo: "$ 16299"},
    {nombre: "Sommier Simmons BackCare 2 plazas", costo: "$ 161080"},
    {nombre: "Remera Aeroready", costo: "$ 17000"},
    {nombre:  "Campera Macowens Deportiva Lisa", costo: "$ 21599"}
  ]

  // listaDeProductos: Producto[] = [
  //   {title: "phone", price: 2}
  // ]

  lista2:any;

  mostrarLista: Boolean = true;

  toggleList(){
    this.mostrarLista = !this.mostrarLista;
  }

  displayedColumns2: string[] = ['nombre', 'costo'];

  ngOnInit(): void {
      this.productosService.solicitarProductos().subscribe({
        next: res => {
          this.lista2 = res;
          console.log(this.listaDeProductos);
          console.log(this.lista2.products);
        }
      })
  }

}
