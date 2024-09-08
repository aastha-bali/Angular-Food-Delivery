import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log('Login successful', result);
        localStorage.setItem('user', JSON.stringify(result.user));   
        this.router.navigate(['/']);
        alert('Login successful! Welcome!');
      })
      .catch((error) => {
        console.error('Login failed', error);
        window.alert(error.message);
      });
  }
}