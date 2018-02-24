import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Icomment } from '../interface/icomment';
import { parse } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: Icomment[] = [];

  @ViewChild('commentText') comm: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  liked(c: Icomment) {
    c.like++;
  }
  disliked(c: Icomment) {
    c.dislike++;
  }

  reviewcount(c: Icomment, n: HTMLInputElement) {
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }


  addComment() {
    let c: Icomment = {
      comment: this.comm.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    }
    this.comments.push(c)
  }

}
