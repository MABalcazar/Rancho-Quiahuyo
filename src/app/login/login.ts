import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';


// Componente de inicio de sesión
// Este componente se llama Login su HTML está aquí, Su CSS está aquí y necesita FormsModule
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

// Clase del componente de inicio de sesión, dentro de ella no hay constructor ni ngOnInit, ni componentes, solo propiedades y métodos
export class Login {

  // Variables o Propiedades del componente de inicio de sesión
  // =============================
  //Variables de entrada (Input del usuario)
  // =============================
  public username: string = '';
  public password: string = '';

  // =============================
  //Variables de estado
  // =============================
  public botonHabilitado: boolean = false;
  public mensaje: string = '';
  public tipoMensaje: string = '';
  public loading: boolean = false;

  // =============================
  //Datos del sistema
  // =============================
  public usuarios: { nombre: string; password: string }[] = [
  {
    nombre: 'admin',
    password: '123456'
  },
  {
    nombre: 'michelle',
    password: 'qwerty'
  }
];


constructor(private changeDetectorRef : ChangeDetectorRef ){

}



// =============================
// Métodos (funciones) del componente de inicio de sesión
// =============================

public validarFormulario() {
    this.botonHabilitado =
    this.username.trim().length >= 3 &&
    this.password.trim().length >= 6;
}

public iniciarSesion() {
  const user = this.username.trim();
  const password = this.password.trim();
  this.loading = true;

  setTimeout(() => {
 
  
  const accesoPermitido = this.validarCredenciales(user, password);

  if (accesoPermitido) {

    this.mensaje = 'Inicio de sesión exitoso';
    this.tipoMensaje = 'success';
    
  } else {
    this.mensaje = 'Usuario o contraseña incorrectos';
    this.tipoMensaje = 'error';
  }
  
  this.loading = false;
  this.changeDetectorRef.detectChanges();

}, 2000);

}

private validarCredenciales(user: string, password: string): boolean {//esta funcion siempre va a regresar un booleano,
  // true o false, si el usuario y la contraseña son correctos o no
  const usuarioEncontrado = this.usuarios.find(function(usuario) {
    return usuario.nombre === user;
  });

  if (usuarioEncontrado && usuarioEncontrado.password === password) {
    return true;
  }
  return false;
 
} 
}