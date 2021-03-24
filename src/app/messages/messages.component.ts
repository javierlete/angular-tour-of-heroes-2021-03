import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  // public messageService: MessageService;

  // constructor(messageService: MessageService) {
  //   this.messageService = messageService;
  // }

  ngOnInit(): void {
  }

}
