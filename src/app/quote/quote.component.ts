import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  new Quote(1,'Moral indignation is jealousy with a halo','Peter Polle','H. G. Wells',new Date(2018,3,14)),
  new Quote(2,'Glory is fleeting, but obscurity is forever','George Raburu','Napoleon Bonaparte',new Date(2018,3,14)),
  new Quote(3,'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts','Willis Kimani','Bertrand Russell',new Date(2018,3,14)),
  new Quote(4,'Victory goes to the player who makes the next-to-last mistake','Mahdy Twalib','Chessmaster Savielly Grigorievitch Tartakower',new Date(2018,3,14)),
  ]

toogleDetails(index){
        this.quotes[index].showDetails = !this.quotes[index].showDetails;
    }

deleteQuote(isDelete,index){
      if (isDelete){

        let toDelete=confirm(`Are you sure you want to delete the quote below?

${this.quotes[index].quote}`)


        if (toDelete){
            this.quotes.splice(index,1);
            }
        }
    }

 addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
         quote.dateCreated = new Date()
        this.quotes.push(quote)

    }
  constructor() {
  	
   }

  ngOnInit() {
  }

}
