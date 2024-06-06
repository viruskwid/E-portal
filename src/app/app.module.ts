import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchPipePipe } from './Search/search-pipe.pipe';
import { SearchPipe } from './SearchTwo/search.pipe';
import { AboutComponent } from './about/about.component';

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
    AllusersAdminComponent,
    SearchPipePipe,
    SearchPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    HttpClientModule,
    MatProgressSpinnerModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
