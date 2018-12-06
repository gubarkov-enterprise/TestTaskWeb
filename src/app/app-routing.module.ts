import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePanelComponent } from './manage-panel/manage-panel.component';
import { RoleGuardService as RoleGuard } from 'src/app/guards/role-guard.service';
import { NewAuditorComponent } from './new-auditor/new-auditor.component';
import { ReportComponent } from './report/report.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: 'request', component: RequestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'managment', component: ManagePanelComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' } },
  { path: 'newauditor', component: NewAuditorComponent, canActivate: [RoleGuard], data: { expectedRole: 'Administrator' } },
  { path: 'report', component: ReportComponent, canActivate: [RoleGuard], data: { expectedRole: 'Auditor' } },
  { path: 'report/details/:id', component: TicketDetailComponent, canActivate: [RoleGuard], data: { expectedRole: 'Auditor' } },
  { path: '*', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
