import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete=new EventEmitter<boolean>();

  numberOfUpvote: number=0;
  numberOfDownvote: number=0;

  quoteDelete(Delete:boolean)
  {
    this.isDelete.emit(Delete);
  }

  upvoteButtonClick(){
    this.numberOfUpvote++;
  }

  downvoteButtonClick(){
    this.numberOfDownvote++;
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
