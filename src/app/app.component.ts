import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './types';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tasty Service';

  isAuthenticated = false;
  user: User | undefined;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private httpXsrfTokenExtractor: HttpXsrfTokenExtractor,
  ) {}

  ngOnInit(): void {
    this.authService.authenticate().subscribe((user: User | undefined) => {
      if (user) {
        this.isAuthenticated = true;
        this.user = user;
      }
    });
  }

  logInClicked(): void {
    this.authService.login();
  }

  csrfToken(): string | null {
    return this.httpXsrfTokenExtractor.getToken();
  }

  isEmployee(): boolean {
    return this.user ? this.user.roles.find(role => role === 'employee') !== undefined : false;
  }
}
