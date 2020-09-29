import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/datamodel/suggestion';
import { MatDialog } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/service/suggestion.service';
import { AddSuggestionComponent } from '../add-suggestion/add-suggestion.component';
import { constants } from '../../common/constants'

@Component({
  selector: 'app-simple-tracker',
  templateUrl: './simple-tracker.component.html',
  styleUrls: ['./simple-tracker.component.scss']
})
export class SimpleTrackerComponent implements OnInit {

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
    const dialogRef = this.dialog.open(AddSuggestionComponent, constants.dialogOptions);

    dialogRef.afterClosed().subscribe(response => {
      if (response != null) {
      this.suggestions.push(response);
      }
    });
  }


}
