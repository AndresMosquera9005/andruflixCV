import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  verificarDatos(){
    var correoElectronico = document.getElementById("email") as HTMLLIElement;
    var clave = document.getElementById("password") as HTMLLIElement;

    const correo = "andrubjj@gmail.com"
    const contrasena = "12345678"

    if(this.email == "" && this.password == ""){
      alert("Por favor, ingrese sus datos");
    }else if(this.email == correo && this.password == contrasena){
      this.router.navigate(['/home']);
    }else {
      alert("datos incorrectos, intente nuevamente con los datos correctos");
    }
  }
  

}
