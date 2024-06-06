import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FilecomplaintComponent } from './filecomplaint/filecomplaint.component';
import { ReportwasteComponent } from './reportwaste/reportwaste.component';
import { CommunityComponent } from './community/community.component';
import { ComplaintsatusComponent } from './complaintsatus/complaintsatus.component';
import { WasteStatusComponent } from './waste-status/waste-status.component';
import { WasteAdminComponent } from './waste-admin/waste-admin.component';
import { ComplaintAdminComponent } from './complaint-admin/complaint-admin.component';
import { AllusersAdminComponent } from './allusers-admin/allusers-admin.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"" ,component:UserDashboardComponent},
  {path:"user-home" , component:UserHomeComponent},
  {path:"admin-home", component:AdminHomeComponent},
  {path:"file-complaint" , component:FilecomplaintComponent},
  {path:"report-waste" , component:ReportwasteComponent},
  {path:"community", component:CommunityComponent},
  {path:"complaint-status", component:ComplaintsatusComponent},
  {path:"waste-status", component:WasteStatusComponent},
  {path:"waste-admin", component:WasteAdminComponent},
  {path:"complaint-admin", component:ComplaintAdminComponent},
  {path:"allusers", component:AllusersAdminComponent}, 
  {path:"about", component:AboutComponent}, 
  {path:"**", redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
