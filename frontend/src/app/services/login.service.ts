import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.userservice';
import {environment} from '../../environment/environment';
import {Http, Response, Headers, RequestOption, RequestMethod} from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LoginService {
  private usertologin:string;
  private password:string;
  private resultoflogin;
  private errorMessage;


  constructor(
    private _router: Router, private _http : Http) {
    }


logout() {
  localStorage.removeItem("user");
  localStorage.remveItem("email");
  localStorage.removeItem("token");
  this._router.navigate(['login']);
}

login(user) : Promise<any> {
    var usertologin =new UserService(user.usertologin,user.password);
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify({user});
    let options = new RequestOptions();
    return this._http.post(environment.apiUrl + environment.loginModuleUrl, body, {
        method: 'POST',
        headers: headers,
        body: body,
        url: environment.apiUrl + environment.loginModuleUrl
      })
      .toPromise()
      .then(response => this.handleSuccess(response))
      .catch(error=> this.handleError(error));

  }
  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error.json()); // for demo purposes only
    return Promise.reject(error.json());
  }
  private handleSuccess(response: any): Promise<any> {
    response => response.json();
    //console.error('datos de salida',response.json() ); // for demo purposes only
    return Promise.resolve(response.json());
  }
}
