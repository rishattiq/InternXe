import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  // onLogin(loginObj: any) {
  //   return this.http.post(
  //     'https://jsonplaceholder.typicode.com/users',
  //     loginObj
  //   );
  // }

  // onLogin(loginObj: any) {
  //   return this.http.post(
  //     'http://localhost:5292/api/Customer/login',
  //     loginObj,
  //     { responseType: 'text' } // Assume you are getting the customerid as a text response
  //   );
  // }

  get_userList() {
    return this.http.get('http://localhost:5292/api/Customer/getallcustomers');
  }

  get_orders() {
    return this.http.get('http://localhost:5292/api/Order/getallorders');
  }

  createUser(obj: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', obj);
  }

  delete_user(userid: any) {
    return this.http.delete(
      `http://localhost:5292/api/Customer/deletecustomerbyid/${userid}`
    );
  }

  getuserbyID(userid: any) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users?id=' + userid
    );
  }

  get_complaints() {
    return this.http.get('http://localhost:5292/api/Contact/getallmessages');
  }

  // edit_user(userid:any){

  //   return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)

  // }
}
