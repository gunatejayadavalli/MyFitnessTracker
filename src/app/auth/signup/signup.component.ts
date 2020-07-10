import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  maxDate;
  isLoading = false;
  loadingSubscription : Subscription;

  constructor(private authService : AuthService, private uiService : UIService) { }

  ngOnDestroy(){
    if(this.loadingSubscription){
      this.loadingSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(loadingState => {
      this.isLoading = loadingState;
    })
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  OnSubmit(form: NgForm){
    this.authService.registerUser({
      email : form.value.email,
      password : form.value.password
    })
  }

}