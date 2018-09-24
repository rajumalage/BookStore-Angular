import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http:Http){}

  sendCredential(username: string, passsword: string){
    let url = "http://localhost:8181/token";
    let encodedCredentials = btoa(username+":"+passsword);
    let basicHeader = "Basic "+encodedCredentials;
    let headers = new Headers ({
      'Content-Type' : 'application/x-www-form-urlencoded,multipart/form-data,text/plain,xhtml+xml,json',
      'Authorization' : basicHeader
    });
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    let url = this.newMethod();
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: headers });
  }


  private newMethod() {
    return "http://localhost:8181/checkSession";
  }

  logout(){
    let url = "http://localhost:8181/user/logout";

    let headers = new Headers ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, '', {headers: headers});
  }

}
