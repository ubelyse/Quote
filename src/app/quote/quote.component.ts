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
    
      new Quote(1,'Get busy living or get busy dying', 'Stephen King'),
      new Quote(2,'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself','Mark Caine'),
      new Quote(3, 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us', 'Helen Keller'),
  
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
  }

  deleteQuote(isDelete,index){
    if(isDelete){
      this.quotes.splice(index,1);
    }
  }

  Upvote(i){
    this.quotes[i].Upvote+=1
  }
  
  downvote(i){
  this.quotes[i].Downvote+=1
}

  constructor() { }

  ngOnInit() {
  }

}
