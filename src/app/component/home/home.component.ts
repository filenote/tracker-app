import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Suggestion } from '../../datamodel/suggestion';
import { SuggestionService } from '../../service/suggestion.service';
import { AddSuggestionComponent } from '../add-suggestion/add-suggestion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
