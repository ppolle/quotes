import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  new Quote(1,'Moral indignation is jealousy with a halo','Peter Polle','H. G. Wells'),
  new Quote(2,'Glory is fleeting, but obscurity is forever','George Raburu','Napoleon Bonaparte'),
  new Quote(3,'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts','Willis Kimani','Bertrand Russell'),
  new Quote(4,'Victory goes to the player who makes the next-to-last mistake','Mahdy Twalib','Chessmaster Savielly Grigorievitch Tartakower'),
  ]



  constructor() {
  	
   }

  ngOnInit() {
  }

}
