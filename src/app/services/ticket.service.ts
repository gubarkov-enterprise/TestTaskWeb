import { TicketStatus } from './../Models/request';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Ticket } from '../Models/request';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private client: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    })
  };

  makeTicket(ticket: Ticket) {
    return this.client.post<any>(environment.apiUrl + 'ticket', ticket, this.headers)
      .subscribe();
  }

  getTickets() {
    return this.client.get<Ticket[]>(environment.apiUrl + 'ticket', this.headers);
  }

  changeTicketStatus(ticket: Ticket, status: TicketStatus) {
    return this.client
    .get(environment.apiUrl + 'ticket/' + ticket.id + '/ChangeStatus?status=' + TicketStatus[status].valueOf().toString(), this.headers)
    .subscribe();
  }

}
