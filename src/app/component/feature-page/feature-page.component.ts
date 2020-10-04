import { Suggestion } from 'src/app/datamodel/suggestion';
import { SuggestionService } from 'src/app/service/suggestion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) { }

  id: string;
  details: Suggestion;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (!this.id) {
        this.router.navigate(['/simple-tracker']);
      }
      this.suggestionService.getSuggestion(this.id).subscribe((response: Suggestion) => {
        this.details = response;
        console.log(this.details);
      });
    });
  }
}
