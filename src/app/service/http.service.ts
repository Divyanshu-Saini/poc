import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly BASE_URL = environment.blogUrl;
  addPostS = new Subject();
  constructor(private readonly httpClient: HttpClient) {}

  addPost(post: Post) {
    return this.httpClient.post(`${this.BASE_URL}blogs`, {
      title: post.title,
      description: post.description,
    });
  }

  validateLogin(user: User) {
    return this.httpClient.post(`${this.BASE_URL}auth/login`, {
      username: user.username,
      password: user.password,
    });
  }

  notifyPostAddition() {
    this.addPostS.next();
  }

  getAllPost() {
    return this.httpClient.get(`${this.BASE_URL}blogs`);
  }
}
