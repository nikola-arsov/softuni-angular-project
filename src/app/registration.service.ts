import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firm } from './firm';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginUser",user);
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerUser",user);
  }

  public registerFirmFromRemote(firm:Firm):Observable<any>{
    return this._http.post<any>("http://localhost:8080/create_firm",firm);
  }

}
