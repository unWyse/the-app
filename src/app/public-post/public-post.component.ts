import { Component, OnInit  } from '@angular/core';
import { SignalRService } from '../signalr.service'

@Component({
  selector: 'public-post',
  imports: [],
  templateUrl: './public-post.component.html',
  styleUrl: './public-post.component.css'
})
export class PublicPost implements OnInit {
  user: string = '';
  message: string = '';

  constructor(public signalRService: SignalRService) {}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addMessageListener();
  }

  sendMessage() {
    this.signalRService.sendMessage(this.user, this.message);
    this.message = '';  // Clear the input after sending
  }
}
