import { Component, OnInit, Input } from '@angular/core';
import { Stage } from '../../../datamodel/stage';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})

export class StageComponent implements OnInit {

  @Input () stageDetails: Stage;

  constructor() { }

  ngOnInit(): void {
  }

  isEnabled(): boolean {
    return this.stageDetails.enabled;
  }

}
