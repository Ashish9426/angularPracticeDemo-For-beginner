import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any = 'alka'

  empData:any = [
    {name:'alka', slary:15000, email:'alka@gmail.com'},
    {name:'ashish', slary:15000, email:'ashish@gmail.com'},
    {name:'darshit', slary:15000, email:'darshit@gmail.com'},
    {name:'alka', slary:15000, email:'ram@gmail.com'}
]
  apidataposts: any;
  apidatacomments: any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getPostsdata()
    // this.getCommentsdata()
    // this.getdata()
  }
  // getdata(){
  //   this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe((data:any) => {
  //     console.log('data', data)
  //     this.apidata=data
  //   })
  // }

  getPostsdata(){
    this.apiService.getPostsData().subscribe((data:any) => {
      console.log(data)
      this.apidataposts=data
    })
    
  }
  // getCommentsdata(){
  //   this.apiService.getCommentsData().subscribe((data:any) => {
  //     console.log(data)
  //     this.apidatacomments=data
  //   })
    
  // }

}
