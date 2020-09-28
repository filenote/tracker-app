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
    if (latestIndex <= 1) { return R.slice(0, 3, stages); }
    if (latestIndex >= stages.length - 2) {
      return R.slice(stages.length - 3, stages.length, stages);
    }
    return R.slice(latestIndex - 1, latestIndex + 2, stages);
    // console.log(stages[latestIndex]);
    // // const ret = [stages[latestIndex], stages[latestIndex - 1], stages[latestIndex - 2]];
    // return [R.reverse(stages).find(stage => stage.enabled)];
  }

}
