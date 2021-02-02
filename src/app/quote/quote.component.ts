import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(0, 'haba haba hujaza', 'Mhenga', 'Grace', new Date(2021, 1, 1)),
    new Quotes(0, 'Akiba haiozi', 'Kamau', 'Mwai', new Date(2020, 1, 1)),
   ];
   // tslint:disable-next-line: typedef
   toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  // tslint:disable-next-line: typedef
  deleteQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  addNewQuote(quote){
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.time = new Date(quote.time);
    this.quotes.push(quote);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
