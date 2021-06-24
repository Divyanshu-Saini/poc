import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
})
export class ShowPostComponent implements OnInit {
  posts: any[] = [];
  constructor(private readonly httpservice: HttpService) {}

  ngOnInit(): void {
    this.getAllPost();

    this.httpservice.addPostS.subscribe((res) => {
      this.getAllPost();
    });
  }

  getAllPost() {
    this.httpservice.getAllPost().subscribe((result: any) => {
      console.log('result is ', result);
      this.posts = result['data'];
    });
  }
}
