import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  onLogin(loginObj: any) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", loginObj);
  }
 
  get_userList(){
    return this.http.get("https://476d-39-40-97-214.ngrok-free.app/api/Customer/getallcustomersfree.app/api/Customer/getallcustomers")
  }

  
  get_orders(){
    return this.http.get("https://744a-39-40-97-214.ngrok-free.app/api/Order/getallorders")
  }

  createUser(obj:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users", obj);
  }

  delete_user(userid:any){

    return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)
  

  }

  getuserbyID(userid:any){
    return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)
  }

  get_complaints(){
    return this.http.get("https://476d-39-40-97-214.ngrok-free.app/api/Contact/getallmessages")
  }



  // edit_user(userid:any){

  //   return this.http.get("https://jsonplaceholder.typicode.com/users?id=" + userid)
  

  // }
}
