import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl="https://jsonplaceholder.typicode.com/"

  constructor(private _http:HttpClient) { }

  getPostsData(){
    return this._http.get(this.baseUrl+"posts")
  }
  getCommentsData(){
    return this._http.get(this.baseUrl+"comments")
  }
  // postData(body:any){
  //   return this._http.post(this.baseUrl+"comments", body)
  // }
}
