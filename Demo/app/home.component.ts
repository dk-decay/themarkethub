import { Component, OnInit } from 'angular2/core';
import { RouterLink, Router, RouteParams } from 'angular2/router';
import { FormBuilder, Control, ControlGroup, Validators } from 'angular2/common';
import { User } from './user';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoginService} from './login.service';
import { Http, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
    selector: 'home',
    templateUrl: 'app/home.component.html',
    providers: [User, HTTP_PROVIDERS, LoginService]
})
export class HomeComponent implements OnInit {

   
 authenticatedUser = {};

    signUpForm: ControlGroup;
    constructor(fb: FormBuilder, private userObj: User,
        private router: Router,
        private _routeParams: RouteParams,
        private _loginService : LoginService) {


        this.signUpForm = fb.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }
    ngOnInit() {


    }


    submit() {


        console.log("user object:", this.userObj);
     
        this._loginService.loginuser(this.userObj)
        .subscribe(res => {
        
            this.authenticatedUser = res;
        },
        err => console.log('error : ',err));
        console.log('Printing authenticatedUser ');
        console.log(this.authenticatedUser);

        this.router.navigate(['UserBody']);

    }

}