import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suggestion = {
    "id" : "aa4e8b49-a329-598d-e3ed-cd14888d6d85",
    "title" : "Description",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "stages" : [ 
        {
            "stage" : 0,
            "enabled" : true,
            "name" : "Submitted"
        }, 
        {
            "stage" : 1,
            "enabled" : false,
            "name" : "Accepted"
        }, 
        {
            "stage" : 2,
            "enabled" : false,
            "name" : "Dev Started"
        }, 
        {
            "stage" : 3,
            "enabled" : false,
            "name" : "Dev Complete"
        }, 
        {
            "stage" : 4,
            "enabled" : false,
            "name" : "Released"
        }
    ],
    "vote" : {
        "voted" : false,
        "amount" : 2
    },
    "createdDate" : "2020-10-05T05:57:20.101Z",
    "lastUpdatedDate" : "2020-10-05T05:57:20.101Z",
    "currentStage" : 0,
    "comments" : [ 
        {
            "_id" : "304442c3-41d9-b990-9ae9-6857e9e32bb6",
            "username" : "admin",
            "text" : "some comment. with edited text",
            "createdDate" : "2020-10-29T03:58:07.138Z",
            "updatedDate" : "2020-10-29T03:58:25.682Z"
        }
    ],
    isCanceled: false
  }

  canceledSuggestion = {
    "id" : "aa4e8b49-a329-598d-e3ed-cd14888d6d85",
    "title" : "Description",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "stages" : [ 
        {
            "stage" : 0,
            "enabled" : true,
            "name" : "Submitted"
        }, 
        {
            "stage" : 1,
            "enabled" : false,
            "name" : "Accepted"
        }, 
        {
            "stage" : 2,
            "enabled" : false,
            "name" : "Dev Started"
        }, 
        {
            "stage" : 3,
            "enabled" : false,
            "name" : "Dev Complete"
        }, 
        {
            "stage" : 4,
            "enabled" : false,
            "name" : "Released"
        }
    ],
    "vote" : {
        "voted" : false,
        "amount" : 2
    },
    "createdDate" : "2020-10-05T05:57:20.101Z",
    "lastUpdatedDate" : "2020-10-05T05:57:20.101Z",
    "currentStage" : 0,
    "comments" : [ 
        {
            "_id" : "304442c3-41d9-b990-9ae9-6857e9e32bb6",
            "username" : "admin",
            "text" : "some comment. with edited text",
            "createdDate" : "2020-10-29T03:58:07.138Z",
            "updatedDate" : "2020-10-29T03:58:25.682Z"
        }
    ],
    isCanceled: true
  }

  constructor() { }

  ngOnInit(): void {
  }
}
