import { Component, OnInit, Input } from '@angular/core';
import { Stage } from '../../datamodel/stage';

@Component({
  selector: 'app-stage-bar',
  templateUrl: './stage-bar.component.html',
  styleUrls: ['./stage-bar.component.scss']
})
export class StageBarComponent implements OnInit {

  @Input () stagesInfo: [Stage]

  constructor() { }

  ngOnInit(): void {
  }
}
