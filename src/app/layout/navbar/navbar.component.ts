import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  user: any = null;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    // Check for the user's authentication state
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.user = null;
    });
  }
}