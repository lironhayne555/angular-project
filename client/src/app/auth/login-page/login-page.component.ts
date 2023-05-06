import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements AfterViewInit {
  @ViewChild('nameFieldRef') nameField!: ElementRef;

  loginForm = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(1024)]
    })
  })

  constructor (
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit() {
    if (this.loginForm.invalid) 
        return;

    this.api.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        const user=JSON.stringify(data.user)
        if(data.user)
        this.api.setUserInfo(user)
        console.log(user)
        if(data.token) this.api.setToken(data.token)
        this.router.navigate([this.auth.redirectUrl])
      },
      error: (err) => console.log(err)
      
    })
  }

  getFieldControl(field: string): FormControl {
    return this.loginForm.get(field) as FormControl;
}

ngAfterViewInit(): void {
  this.nameField.nativeElement.focus();
}
}
