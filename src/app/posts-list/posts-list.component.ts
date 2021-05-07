import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList = [];
  pageSize = 5;
  page = 1;

  constructor(private posts: PostsService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.posts.search().subscribe(response => {
      this.postsList = response.random;
    });
  }
}
