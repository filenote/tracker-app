import { Component, OnInit, Input } from '@angular/core';
import { Suggestion } from '../../datamodel/suggestion';
import { Stage } from '../../datamodel/stage';
import * as R from 'ramda';
import { SuggestionService } from 'src/app/service/suggestion.service';

@Component({
  selector: 'app-feature-suggestion',
  templateUrl: './feature-suggestion.component.html',
  styleUrls: ['./feature-suggestion.component.scss']
})
export class FeatureSuggestionComponent implements OnInit {

  @Input () suggestion: Suggestion;

  stages: Stage[];

  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
    this.stages = this.suggestion.stages;
  }

  addVote(id): void {
    this.suggestionService.addVoteToSuggestion({id})
      .subscribe((response: Suggestion) => {
        this.suggestion.vote.amount = response.vote.amount;
      });
  }

  removeVote(id): void {
    console.log('removing vote ' + id);
  }

  latestStage(stages: Stage[]): Stage[] {
    const reversedIndex = R.reverse(stages).findIndex((stage: Stage) => stage.enabled === true);
    const latestIndex = stages.length - reversedIndex - 1;
    let start = latestIndex - 1;
    if (start <= 0) {
      start = 0;
    }
    let end = start + 3;
    if (end > stages.length) {
      start = stages.length - 3;
      end = stages.length;
    }

    return R.slice(start, end, stages);
  }

}
