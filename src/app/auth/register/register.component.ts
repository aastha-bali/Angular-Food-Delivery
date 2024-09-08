import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register() {
    
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log('Registration successful', result);
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['/']);
        alert('Registration successful! Welcome!');
      })
      .catch((error) => {
        console.error('Registration failed', error);
        window.alert(error.message);
      });
  }
}