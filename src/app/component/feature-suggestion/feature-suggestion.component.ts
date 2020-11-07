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

  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit(): void {
  }

  latestStage(): Stage[] {
    const currentIndex = this.suggestion.currentStage;
    if (currentIndex === this.suggestion.stages.length - 1) {
      return [ this.suggestion.stages[this.suggestion.stages.length - 1] ];
    }

    const stages = this.suggestion.stages;
    let start = currentIndex - 1;
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
