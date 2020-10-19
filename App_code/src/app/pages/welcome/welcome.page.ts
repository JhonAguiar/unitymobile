
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HelpdeskService } from '../../services/Helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public WelcomeForm : FormGroup;

  get email() { return this.WelcomeForm.get('email'); }
  get pass() { return this.WelcomeForm.get('pass'); }

  constructor(private router: Router, private formBuilder: FormBuilder, private helpdeskServ : HelpdeskService) { }

  isValidFormSubmitted = null;

  private buildForm(){
    return this.formBuilder.group({
      email : ['', [
        Validators.required, 
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), 
        Validators.maxLength(50)]],
      pass : ['']
    });
  }

  ngOnInit() {
    this.WelcomeForm = this.buildForm(); 
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  goToForgot(){
    this.router.navigate(['/forgot-password']);
  }

  goToRides(){
    this.isValidFormSubmitted = false;
    if (this.WelcomeForm.invalid) {
       return;
    }


    this.helpdeskServ.submitLogin(this.WelcomeForm.get("email").value, this.WelcomeForm.get("pass").value).subscribe((data : any) => {
      if(data[0] == undefined){
        alert("User doesn't exist")
      }else{
        this.createSession(this.WelcomeForm.get("email").value, data[0].id, data[0].userid);
        this.router.navigate(['/tabs'])
      }
    })
    

    
  }

  createSession(email, id, user_id){
    sessionStorage.setItem('mail', email);
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('user_id', user_id);
  }

}
