import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report, TicketDetail } from '../Models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private client: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    })
  };

  getReport() {
    return this.client.get<Report>(environment.apiUrl + 'report', this.headers);
  }

  getTicketDetail(id) {
    return this.client.get<TicketDetail>(environment.apiUrl + 'report/details/' + id, this.headers);
  }

}
