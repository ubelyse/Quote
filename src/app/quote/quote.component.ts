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
      {id:1, name: 'Get busy living or get busy dying', author:'Stephen King'},
      {id:2,name:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself', author:'Mark Caine'},
      {id:3, name:'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us', author:' Helen Keller'},
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
