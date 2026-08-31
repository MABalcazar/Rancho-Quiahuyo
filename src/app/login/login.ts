import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';


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

@ViewChild('formControl')
formControl!: NgForm; // el ! significa que esta propiedad todavía no tiene un valor cuando se crea la clase, pero Angular la va a inicializar



//el constructor es donde declaramos las dependencias que la clase necesita recibir de Angular.
constructor
(
  private changeDetectorRef : ChangeDetectorRef,
  private router : Router,
  private auth: Auth

 ){
  

}



// =============================
// Métodos (funciones) del componente de inicio de sesión
// =============================

public iniciarSesion() {
    //Comprueba que el formulario sea válido (filtra) 
    //antes de continuar con el proceso de inicio de sesión. Si es inválido, return detiene la ejecución del método
  if (!this.formControl.valid) {
  return;
}
  const user = this.username.trim();
  const password = this.password.trim();

    this.loading = true;
  setTimeout(() => {
 
  
  const accesoPermitido = this.validarCredenciales(user, password);// se pasan los valores que ya procesamor con el trim()

  if (accesoPermitido) {

    this.mensaje = 'Inicio de sesión exitoso';
    this.tipoMensaje = 'success';
    this.router.navigate(['/dashboard']);
    this.auth.isAuthenticated = true;
    
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