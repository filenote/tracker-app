import { Component, OnInit } from '@angular/core';
import { Stage } from '../../datamodel/stage';
import { Suggestion } from '../../datamodel/suggestion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suggestions: Suggestion[] = [
    {
      title: "Testing Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stages: [
        {enabled: true, name: 'Suggestion'},
        {enabled: true, name: 'Accepted'},
        {enabled: false, name: 'Dev Started'},
        {enabled: false, name: 'Dev Complete'},
        {enabled: false, name: 'Released'}
      ]
    },
    {
      title: "Testing Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stages: [
        {enabled: true, name: 'Suggestion'},
        {enabled: false, name: 'Accepted'},
        {enabled: false, name: 'Dev Started'},
        {enabled: false, name: 'Dev Complete'},
        {enabled: false, name: 'Released'}
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
