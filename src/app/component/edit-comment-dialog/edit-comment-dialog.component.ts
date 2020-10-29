import { SuggestionService } from 'src/app/service/suggestion.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-comment-dialog',
  templateUrl: './edit-comment-dialog.component.html',
  styleUrls: ['./edit-comment-dialog.component.scss']
})
export class EditCommentDialogComponent implements OnInit {

  form = this.fb.group({
    text: [this.data.currentText, [Validators.required]]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { commentId: string, currentText: string, suggestionId: string},
    private fb: FormBuilder,
    private suggestionService: SuggestionService,
    private dialogRef: MatDialogRef<EditCommentDialogComponent>
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.form.valid) { return; }

    if (!this.form.dirty) {
      this.dialogRef.close();
      return;
    }

    const text = this.form.get('text').value;

    this.suggestionService.updateComment(this.data.suggestionId, this.data.commentId, text).toPromise()
      .then((response: Response) => {
        this.dialogRef.close({ suggestion: response });
      });
  }

}
