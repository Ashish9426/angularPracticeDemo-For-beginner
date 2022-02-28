import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  commentsdata: any;

  constructor(private Apiservice:ApiService) { }

  ngOnInit(): void {
    this.getcommentsdata()
  }
  getcommentsdata(){
    this.Apiservice.getCommentsData().subscribe((data:any) => {
      console.log(data)
      this.commentsdata = data
    })
  }
}


