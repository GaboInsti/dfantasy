import { Injectable } from '@angular/core';
import { delay, of, switchMap, tap } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: User = {
    email: 'admin@dfantasy.com',
    password: 'admin1234'
  }

  constructor() { }

  login(user: User) {
    const validCredentials = user.email === this.user.email && user.password === this.user.password;
    const date = new Date().getTime().toString();
    return of(validCredentials).pipe(
      delay(1500),
      switchMap(valid => {
        if (valid) {
          return of(date)
        } else {
          throw new Error('Usuario o contraseña incorrecto');
        }
      }),
      tap(time => localStorage.setItem('logged', time))
    );
  }

  verifyLogged() {
    const loggedAt = +localStorage.getItem('logged');
    const currentTime = new Date().getTime();
    const timeLeft = currentTime - loggedAt;
    const validTime = timeLeft >= 0 && timeLeft < 3600000;
    if (!validTime) {
      localStorage.removeItem('logged');
    }
    return validTime;
  }

  logout() {
    localStorage.removeItem('logged');
  }

}
