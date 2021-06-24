import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  addPostS = new Subject();
  constructor(private readonly httpClient: HttpClient) {}

  addPost(post: Post) {
    return this.httpClient.post('/api/post/createPost', {
      title: post.title,
      description: post.description,
    });
  }

  validateLogin(user: User) {
    return this.httpClient.post('/api/user/login', {
      username: user.username,
      password: user.password,
    });
  }

  notifyPostAddition() {
    this.addPostS.next();
  }

  getAllPost() {
    return this.httpClient.post('/api/post/getAllPost', {});
  }
}
