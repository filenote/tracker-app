import { EditCommentDialogComponent } from './../edit-comment-dialog/edit-comment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Suggestion } from 'src/app/datamodel/suggestion';
import { SuggestionService } from 'src/app/service/suggestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FeatureComment } from 'src/app/datamodel/feature-comment';
import { Stage } from 'src/app/datamodel/stage';
import * as R from 'ramda';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { constants } from 'src/app/common/constants';

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
    public authService: AuthService,
    private dialog: MatDialog
  ) { }

  id: string;
  suggestion: Suggestion;
  comments: FeatureComment[];
  isLoading: boolean;
  jwt: JwtHelperService = new JwtHelperService();


  addCommentForm = this.fb.group({
    comment: ['', [Validators.required]]
  });

  onSubmit(): void {
    if (this.addCommentForm.valid) {
      const comment: string = this.addCommentForm.get('comment').value;

      this.suggestionService.addComment(this.id, comment).subscribe((response: Response) => {
        if (response.status === 200) {
          if (this.comments === null) {
             this.comments = [];
          }
          this.comments = R.insert(0, response.body, this.comments);
        }
      });
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
        this.comments = response.comments;
        this.isLoading = false;
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
    // check if it's the last stage, do nothing if it is
    if (stage.stage === this.suggestion.currentStage) { return; }

    this.suggestionService.updateCurrentStage(this.suggestion.id, stage).subscribe((response: Suggestion) => {
      this.suggestion = response;
    });
  }

  availableStages(stages: Stage[]): Stage[] {
    return R.remove(this.currentStageIndex(stages), 1, stages);
  }

  currentStageIndex(stages: Stage[]): number {
    return this.suggestion.currentStage;
  }

  nextStage(stages: Stage[]): Stage {
    const index = this.suggestion.currentStage;
    if (index === stages.length - 1) { return stages[index]; }
    return stages[index + 1];
  }

  latestStage(stages: Stage[]): Stage[] {
    const latestIndex = this.suggestion.currentStage;
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
    this.router.navigate([this.router.url, 'login']);
  }

  parse(date: string): number {
    return Date.parse(date);
  }

  canEditComment(username: string): boolean {
    const token = localStorage.getItem('token');
    if (!token) { return false; }
    const decodedToken = this.jwt.decodeToken(token);

    return username === decodedToken.sub;
  }

  openEditCommentDialog(commentId: string, currentText: string): void {
    const details = {
      currentText,
      commentId,
      suggestionId: this.suggestion.id
    };
    const dialogRef = this.dialog.open(EditCommentDialogComponent,
      { ...constants.dialogOptions, data: { ...details }});

    dialogRef.afterClosed().subscribe(result => {
      const newSuggestion = result?.suggestion;
      if (!!newSuggestion) {
        this.suggestion = newSuggestion;
        this.comments = this.suggestion.comments;
      }
    });
  }
}
