import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SuggestionService } from 'src/app/service/suggestion.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.scss']
})
export class AddSuggestionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private suggestionService: SuggestionService,
    private dialogRef: MatDialogRef<AddSuggestionComponent>
  ) { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  submitSuggestionForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['',[ Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  })


  onSubmit() { 
    if (this.submitSuggestionForm.valid) {
      this.suggestionService.insertSuggestion({
        title: this.submitSuggestionForm.get('title').value,
        description: this.submitSuggestionForm.get('description').value,
        email: this.submitSuggestionForm.get('email').value
      }).subscribe((response) => {
        this.dialogRef.close('Closing dialog')
        console.log(response);
      })
    }
  }
}
