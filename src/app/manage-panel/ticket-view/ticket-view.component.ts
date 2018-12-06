import { Component, OnInit, Input } from '@angular/core';
import { Ticket, TicketStatus } from 'src/app/Models/request';
import { formatDate } from '@angular/common';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-view',
  templateUrl: './ticket-view.component.html',
  styleUrls: ['./ticket-view.component.scss']
})
export class TicketViewComponent implements OnInit {

  constructor(private service: TicketService) { }
  @Input()
  ticket: Ticket;

  ngOnInit() {
  }

  changeState(state: TicketStatus) {
    this.service.changeTicketStatus(this.ticket, state);
    this.ticket.status = state;
  }

}
