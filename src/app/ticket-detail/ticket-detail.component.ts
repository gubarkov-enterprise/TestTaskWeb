import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReportService } from '../services/report.service';
import { TicketDetail } from '../Models/report';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

  constructor(private service: ReportService, private route: ActivatedRoute) { }

  @Input()
  detail: TicketDetail;

  @Output()
  StateChanged = new EventEmitter<boolean>();
  show: boolean;


  ngOnInit() {
  }

  back() {
    this.show = false;
    this.StateChanged.emit(this.show);
    this.show = false;
  }

}
