import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/model/user.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../../shared/store';
import { TrySignup } from '../../shared/store/actions/auth.actions';
import { errorAuthSelector } from '../../shared/store/selectors/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  public error$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      name: [''],
      password: ['']
    });
    this.error$ = this.store.pipe(
      select(errorAuthSelector)
    );
  }

  public submit(): void {
    this.store.dispatch(new TrySignup(this.form.value));
    /*
    this.auth.signup(this.form.value).subscribe((user: User) => {
      this.router.navigate(['/signin']);
    }, err => {
      this.error = err;
    });
    */
  }
}