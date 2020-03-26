import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  titulo = 'Listado de Usuarios';
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe( data =>  {
      this.usuarios = data;
      console.log(data);
    });
  }

}
