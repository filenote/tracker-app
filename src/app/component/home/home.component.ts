import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContentChange, QuillEditorComponent } from 'ngx-quill';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Suggestion } from '../../datamodel/suggestion';
import { SuggestionService } from '../../service/suggestion.service';
import { AddSuggestionComponent } from '../add-suggestion/add-suggestion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hide = false;
  form: FormGroup;
  backgroundColor = '';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['<ol><li>test</li><li>123</li></ol>']
    });
  }

  ngOnInit(): void {
  }

  setControl(): void {
    this.form.setControl('editor', new FormControl('test - new Control'));
  }

  patchValue(): void {
    this.form.get('editor').patchValue(`${this.form.get('editor').value} patched!`);
  }

}