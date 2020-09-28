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

  suggestions: Suggestion[];

  constructor(
    private suggestionService: SuggestionService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.suggestionService.getAllSuggestions()
      .subscribe((response: Suggestion[]) => {
        console.log(response);
        this.suggestions = response;
      });
  }

  addSuggestion(): void {
    const dialogRef = this.dialog.open(AddSuggestionComponent, {
        width: '50%',
      });

    dialogRef.afterClosed().subscribe(response => {
      if (response != null) {
      this.suggestions.push(response);
      }
    });
  }

}
