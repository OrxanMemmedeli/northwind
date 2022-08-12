import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Quote } from 'src/app/Models/quote';
import { AuthQuoteService } from 'src/app/services/auth-quote.service';

@Component({
  selector: 'app-auth-quotes',
  templateUrl: './auth-quotes.component.html',
  styleUrls: ['./auth-quotes.component.css'],
})
export class AuthQuotesComponent implements OnInit {
  quotes: Quote[];

  constructor(private quoteServive: AuthQuoteService, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes() {
    this.quoteServive.getQuotes().subscribe(
      (response) => {
        this.quotes = response.quotes;
        console.log(response)
      },
      (errorResponse) => {
        this.toastrService.error(errorResponse.error.message,"Error");
        console.log(errorResponse);
      }
    );
  }
}
