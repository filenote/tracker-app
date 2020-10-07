import { Suggestion } from 'src/app/datamodel/suggestion';
import { SuggestionService } from 'src/app/service/suggestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FeatureComment } from 'src/app/datamodel/feature-comment';
import { Stage } from 'src/app/datamodel/stage';
import * as R from 'ramda';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { constants } from 'src/app/common/constants';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    public authService: AuthService
  ) { }

  id: string;
  suggestion: Suggestion;
  comments: FeatureComment[] = [];
  isLoading: boolean;

  addCommentForm = this.fb.group({
    comment: ['', [Validators.required]]
  });

  onSubmit() {

    console.log(this.addCommentForm);

    if (this.addCommentForm.valid) {
      const comment: string = this.addCommentForm.get('comment').value;

      this.suggestionService.addComment(this.id, comment).subscribe((response: Response) => {
        console.log(response);
        if (response.status === 200) {
          this.comments = R.insert(0, response.body, this.comments)
        }
      })
    }
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      if (!this.id) {
        this.router.navigate(['/simple-tracker']);
      }

      this.suggestionService.getSuggestion(this.id).subscribe((response: Suggestion) => {
        console.log(response);
        this.suggestion = response;
        this.isLoading = false;
      });

      this.suggestionService.getComments(this.id).subscribe((response: FeatureComment[]) => {
        if (!!response) {
          this.comments = response;
        }
      });
    });
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

  updateCurrentStage(stage: Stage): void {
    this.suggestionService.updateCurrentStage(this.suggestion.id, stage).subscribe((response: Suggestion) => {
      this.suggestion = response;
      console.log(response);
    });
  }

  availableStages(stages: Stage[]): Stage[] {
    return R.remove(this.currentStageIndex(stages), 1, stages);
  }

  currentStageIndex(stages: Stage[]): number {
    return stages.length - R.reverse(stages).findIndex((stage: Stage) => stage.enabled === true) - 1;
  }

  nextStage(stages: Stage[]): Stage {
    const index = stages.length - R.reverse(stages).findIndex((stage: Stage) => stage.enabled === true);
    return stages[index];
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

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    let registrationRef: MatDialogRef<RegisterComponent>;

    const dialogRef = this.dialog.open(LoginComponent, constants.dialogOptions);

    dialogRef.afterClosed().subscribe(response => {
      if (response && response.registering) {
        registrationRef = this.dialog.open(RegisterComponent, constants.dialogOptions);

        registrationRef.afterClosed().subscribe(registerResponse => {
        });
      }
    });
  }

  parse(date: string): number {
    return Date.parse(date);
  }
}
