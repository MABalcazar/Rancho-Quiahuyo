import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  botonHabilitado = false;

  mensaje = '';
  tipoMensaje = '';

  usuarios = [
  {
    nombre: 'admin',
    password: '123456'
  },
  {
    nombre: 'michelle',
    password: 'qwerty'
  }
];

  validarFormulario() {
    this.botonHabilitado =
    this.username.trim().length >= 3 &&
    this.password.trim().length >= 6;
}

iniciarSesion() {
  const user = this.username.trim();
  const password = this.password.trim();

  const accesoPermitido = this.validarCredenciales(user, password);

  if (accesoPermitido) {
    this.mensaje = 'Inicio de sesión exitoso';
    this.tipoMensaje = 'success';
  } else {
    this.mensaje = 'Usuario o contraseña incorrectos';
    this.tipoMensaje = 'error';
  }
}

validarCredenciales(user: string, password: string): boolean {
  const usuarioEncontrado = this.usuarios.find(function(usuario) {
    return usuario.nombre === user;
  });

  if (usuarioEncontrado && usuarioEncontrado.password === password) {
    return true;
  }

  return false;
}
}