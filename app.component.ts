import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp3';
  statusMsg:any;
  isSucccess:boolean;
  isFail:boolean;
  onSubmit(data){
   // this.username=data.username;
   alert("alert");

  }
  loginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    phoneno:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required)
  })
  
  onLogin(){
    if(this.loginForm.value.password==this.loginForm.value.confirmpassword){
      this.statusMsg='Successfully Registered... : '+this.loginForm.value.username;
      this.isSucccess=true;
      this.isFail=false;
      this.loginForm.reset();

    }else{
      this.statusMsg='Password Must be Same '
      this.isFail=true;
      this.isSucccess=false;
    }
    
   console.warn(this.statusMsg);
   console.warn("PassWordLength : "+this.loginForm.value.password.length);
    console.warn(this.loginForm.value.username);
    console.warn(this.loginForm.value);
  }
  get username(){return this.loginForm.get('username')}
  get lastname(){return this.loginForm.get('lastname')}
  get phoneno(){return this.loginForm.get('phoneno')}
  get email(){return this.loginForm.get('email')}
  get dob(){return this.loginForm.get('dob')}
  get address(){return this.loginForm.get('address')}
  get city(){return this.loginForm.get('city')}
  get state(){return this.loginForm.get('state')}
  get password(){return this.loginForm.get('password')}
  get confirmpassword(){return this.loginForm.get('confirmpassword')}
}
