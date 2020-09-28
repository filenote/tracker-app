import { Component, OnInit } from '@angular/core';
import { Stage } from '../../datamodel/stage';
import { Suggestion } from '../../datamodel/suggestion';
import { SuggestionService } from '../../service/suggestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suggestions: Suggestion[];
  
  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
    this.suggestionService.getAllSuggestions()
      .subscribe((response: Suggestion[]) => {
        this.suggestions = response;
      })
  }

}
