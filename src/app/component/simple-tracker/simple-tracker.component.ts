import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/datamodel/suggestion';
import { MatDialog } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/service/suggestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-tracker',
  templateUrl: './simple-tracker.component.html',
  styleUrls: ['./simple-tracker.component.scss']
})
export class SimpleTrackerComponent implements OnInit {

  suggestions: Suggestion[];
  isLoading: boolean;
  active: boolean[];

  constructor(
    private suggestionService: SuggestionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.suggestionService.getAllSuggestions()
      .subscribe((response: Suggestion[]) => {
        this.suggestions = response;
        this.isLoading = false;
        this.active = new Array(this.suggestions.length).fill(false);
      });
  }

  addSuggestion(): void {
    this.router.navigate(['simple-tracker', 'new'], { queryParams: {
      from: 'simple-tracker'
    }});
  }

  toggleActive(index: number): void {
    this.active[index] = !this.active[index];
    console.log(this.active);
  }
}
