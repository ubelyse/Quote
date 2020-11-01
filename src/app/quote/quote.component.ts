import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=
  [
    
      new Quote(1,'Get busy living or get busy dying', 'Stephen King','Belyse Inema',new Date(2020,11,1)),
      new Quote(2,'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself','Mark Caine','Belyse Inema',new Date(2020,11,1)),
      new Quote(3, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us', 'Helen Keller','Belyse Inema',new Date(2020,11,1)),
  
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
  }

  deleteQuote(isDelete,index){

    if(isDelete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
