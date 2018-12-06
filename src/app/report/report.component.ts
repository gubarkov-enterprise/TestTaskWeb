import { Report, TicketDetail, TicketResult } from './../Models/report';
import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private service: ReportService) { }

  report: Report = new Report();
  selectedDetail: TicketDetail;
  loading = false;

  showDetail = false;

  ngOnInit() {
    this.service.getReport()
      .subscribe(x => this.report = x);
  }

  stateChanged(state) {
    this.showDetail = state;
  }

  selectDetail(ticket: TicketResult) {
    this.loading = true;
    this.service.getTicketDetail(ticket.id)
      .subscribe(response => {
        this.selectedDetail = response;
        this.showDetail = true;
        this.loading = false;
      });
  }
}
