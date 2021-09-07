import { Component, ChangeDetectorRef } from '@angular/core';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
} from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState!: AuthState;

  constructor(private ref: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  gotoTodo() {
    // this.router.navigate(['/todo']).then(() => {
    //   // window.location.reload();
    //   window.location.href = window.location.protocol + '//' + window.location.host + '/todo';
    // });
    this.router.navigate(['/todo']);
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
