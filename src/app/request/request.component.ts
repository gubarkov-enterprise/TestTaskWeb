import { TicketService } from './../services/ticket.service';
import { Ticket } from './../Models/request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  request: Ticket = new Ticket();
  created = false;
  constructor(private service: TicketService) { }
  ngOnInit() {
  }


  applyRequest() {
    this.service.makeTicket(this.request);
    this.created = true;
  }
}
