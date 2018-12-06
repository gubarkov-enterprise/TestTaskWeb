import { TicketStatus } from 'src/app/Models/request';
import { Ticket } from './../Models/request';
import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-manage-panel',
  templateUrl: './manage-panel.component.html',
  styleUrls: ['./manage-panel.component.scss']
})
export class ManagePanelComponent implements OnInit {

  constructor(private service: TicketService) { }

  tickets: Ticket[];
  displayedTickets: Ticket[];

  statusFilter = [
    'Approved',
    'Rejected',
    'Unchecked'
  ];

  ngOnInit() {
    this.service.getTickets().subscribe(Response => {
      this.tickets = Response;
      this.displayedTickets = this.tickets.filter(x => this.statusFilter.indexOf(x.status.toString()) !== -1);
    });
  }

  updateList(event) {
    const status = event.currentTarget.attributes.data.value;
    const index = this.statusFilter.findIndex(x => x === status);
    if (index === -1) {
      this.statusFilter.push(status);
    } else {
      this.statusFilter.splice(index, 1);
    }
    this.displayedTickets = this.tickets.filter(x => this.statusFilter.indexOf(x.status.toString()) !== -1);
  }

}
