import { Router } from '@angular/router';
import { CustomUploadAdapter } from 'src/app/adapter/custom-upload-adapter';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/service/suggestion.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.scss']
})
export class AddSuggestionComponent implements OnInit {

  editor = ClassicEditor;
  submitSuggestionForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [ Validators.required ]],
    email: ['', [Validators.required, Validators.email]]
  });

  editorConfig = {
    toolbar: [
      'heading', 'bold', 'italic', 'link', 'bulletedList', 'numberedList',
      '|', 'indent', 'outdent',
      '|', 'blockQuote', 'insertTable'
    ]
  };

  loading = false;

  constructor(
    private fb: FormBuilder,
    private suggestionService: SuggestionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onReady(editor: any): void {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new CustomUploadAdapter( loader );
    };
  }

  onSubmit(): void {
    this.loading = true;
    if (this.submitSuggestionForm.valid) {
      this.suggestionService.insertSuggestion({
        title: this.submitSuggestionForm.get('title').value,
        description: this.submitSuggestionForm.get('description').value,
        email: this.submitSuggestionForm.get('email').value
      }).subscribe((response) => {
        this.loading = false;
        this.router.navigate(['simple-tracker']);
      });
    }
  }
}


