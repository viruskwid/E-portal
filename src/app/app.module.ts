import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeaturesComponent } from './features/features.component';
import { FilecomplaintComponent } from './filecomplaint/filecomplaint.component';
import { ReportwasteComponent } from './reportwaste/reportwaste.component';
import { CommunityComponent } from './community/community.component';
import { ComplaintsatusComponent } from './complaintsatus/complaintsatus.component';
import { WasteStatusComponent } from './waste-status/waste-status.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';
import { WasteAdminComponent } from './waste-admin/waste-admin.component';
import { ComplaintAdminComponent } from './complaint-admin/complaint-admin.component';
import { AllusersAdminComponent } from './allusers-admin/allusers-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    UserHomeComponent,
    AdminHomeComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    FilecomplaintComponent,
    ReportwasteComponent,
    CommunityComponent,
    ComplaintsatusComponent,
    WasteStatusComponent,
    ChartComponent,
    WasteAdminComponent,
    ComplaintAdminComponent,
    AllusersAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
