import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  

  
  @Input() quote:Quote;

  @Output() isDelete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);
  }

  likes: number;
  disLikes: number;

  constructor() { 
    this.likes = 0;
    this.disLikes = 0;
   
  }

 voteUp() :boolean {
  this.likes += 1;
  return false;
}

  voteDown() :boolean {
    this.disLikes += 1;
    return false;
  }

  ngOnInit() {
  }

}
