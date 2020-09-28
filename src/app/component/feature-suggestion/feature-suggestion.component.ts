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

  addVote(id) {
    this.suggestionService.addVoteToSuggestion({id: id})
      .subscribe((response: Suggestion) => {
        this.suggestion.vote.amount = response.vote.amount;
      })
  }

  removeVote(id) {
    console.log('removing vote ' + id);
  }

  latestStage(stages: Stage[]) {
    return [R.reverse(stages).find(stage => stage.enabled)]
  }

}
