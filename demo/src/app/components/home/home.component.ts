import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  name: any = 'Alka';
  apiData:any;

  employeeData:any
  constructor(private _http:HttpClient) { 

  }

  ngOnInit(): void {
    this.getPostsData()

    let data = [
      {name:'Alka', age:'23', email:'alka@gmail.com'},
      {name:'Ashish', age:'27', email:'ashish@gmail.com'},
      {name:'Aman', age:'23', email:'aman@gmail.com'},
      {name:'Shiva', age:'5', email:'shiva@gmail.com'},
      {name:'Shubh', age:'20', email:'shuh@gmail.com'},
      {name:'Alka', age:'1', email:'alka@gmail.com'},
    ];
    this.employeeData = data
  }

  getPostsData(){
    this._http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data:any) =>{
      console.log('data', data)
      this.apiData = data;
    })
  }



}
