import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-comment',
  templateUrl: './feature-comment.component.html',
  styleUrls: ['./feature-comment.component.scss']
})
export class FeatureCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parse(date: string): number {
    return Date.parse(date);
  }

}
