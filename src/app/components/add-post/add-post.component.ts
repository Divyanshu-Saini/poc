import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  @ViewChild('closeBtn')
  closeBtn!: ElementRef;
  post: Post;

  constructor(
    private readonly httpservice: HttpService,
    private readonly router: Router
  ) {
    this.post = new Post();
  }

  ngOnInit(): void {}

  addPost() {
    if (this.post.title && this.post.description) {
      this.httpservice.addPost(this.post).subscribe((res) => {
        this.closeBtn.nativeElement.click();
        this.httpservice.notifyPostAddition();
      });
    } else {
      alert('Title and Description required');
    }
  }
}
