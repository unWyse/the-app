import { Component, OnInit  } from '@angular/core';
import { SignalRService } from '../signalr.service'

@Component({
  selector: 'public-post',
  imports: [],
  templateUrl: './public-post.component.html',
  styleUrl: './public-post.component.css'
})
export class PublicPost implements OnInit {
  outboundMessage: HTMLInputElement | null ;
  username: HTMLInputElement | null ;

  constructor(public signalRService: SignalRService) {
    signalRService.startConnection();
    signalRService.addMessageListener();
    signalRService.handleDisconnects();

    this.outboundMessage = document.querySelector("#tbMessage");
    this.username = document.querySelector("#tbSender");
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addMessageListener();
  }

  sendMessage(message:string) {
    if(message && message != ""){
      this.signalRService.sendMessage("test", message);
      //this.outboundMessage.value = "";  // Clear the input after sending
    }
  }
}
