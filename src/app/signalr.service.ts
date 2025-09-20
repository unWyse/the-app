import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;

  constructor() {}

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5120/hub') // URL of the SignalR hub
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connection started'))
      .catch(err => console.log('Error establishing SignalR connection: ' + err));
  }

  public addMessageListener = () => {
    this.hubConnection.on('messageReceived', (user: string, message: string) => {
      console.log(`User: ${user}, Message: ${message}`);
    });
  }

  public sendMessage = (user: string, message: string) => {
    this.hubConnection.invoke('newMessage', user, message)
      .catch(err => console.error(err));
  }

  public handleDisconnects = () => {
    this.hubConnection.onclose(() => {
      console.log('Connection lost. Attempting to reconnect...');
      setTimeout(() => this.startConnection(), 3000);  // Try reconnecting after 3 seconds
    });
  }
}