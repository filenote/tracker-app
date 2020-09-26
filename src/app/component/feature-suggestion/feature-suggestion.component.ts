import { Component, OnInit, Input } from '@angular/core';
import { Suggestion } from '../../datamodel/suggestion';
import { Stage } from '../../datamodel/stage';

@Component({
  selector: 'app-feature-suggestion',
  templateUrl: './feature-suggestion.component.html',
  styleUrls: ['./feature-suggestion.component.scss']
})
export class FeatureSuggestionComponent implements OnInit {

  @Input () suggestion: Suggestion;

  stages: Stage[];

  constructor() { }

  ngOnInit(): void {
    this.stages = this.suggestion.stages;
  }

}
