import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from '../snack/snack.component';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { initializeApp } from "firebase/app";
import { child, getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyATFToDBT8FqSJoOyf9VZDtQlu0ARMtpLw",
  authDomain: "portafolio-52069.firebaseapp.com",
  databaseURL: "https://portafolio-52069-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portafolio-52069",
  storageBucket: "portafolio-52069.appspot.com",
  messagingSenderId: "948066141348",
  appId: "1:948066141348:web:2bf9be11153fd589489231"
};

const app = initializeApp(firebaseConfig);

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent {
  formulario: FormGroup;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mensajeFormContrl = new FormControl('');
  matcher = new MyErrorStateMatcher();
  error = false;

  constructor(private _snackBar: MatSnackBar) {
    this.formulario = new FormGroup({
      correo: this.emailFormControl,
      mensaje: this.mensajeFormContrl
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 5 * 1000
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const email = this.formulario.value.correo;
      const message = this.formulario.value.mensaje;
      console.log("Email:", email);
      console.log("Message:", message);
      this.writeUserData(email,message);
      this.error=false;
      this.formulario.reset();
    } else {
      this.error=true;
      console.error("Form is invalid");
    }
  }

   writeUserData(email:string, mensaje:string) {
    const db = getDatabase();
    const newPostKey = push(child(ref(db), 'correos')).key;
    set(ref(db, 'correos/'+newPostKey), {
      email: email,
      mensaje : mensaje
    }).then(()=>{
      this._snackBar.open('Se envío con Exito!!','ok',{
        duration: 5000
      });
    });
  }
}