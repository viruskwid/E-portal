import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-complaintsatus',
  templateUrl: './complaintsatus.component.html',
  styleUrls: ['./complaintsatus.component.css'],
})
export class ComplaintsatusComponent implements OnInit {
  searchKey:string=""
  alluserComplaints: any = [];
  SERVER_URL = 'https://eportalserver.onrender.com/uploads';
  constructor(private api: ApiService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.getUserComplaint();
  }

  getUserComplaint() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      };
      this.api.getUserComplaintsAPI().subscribe((res: any) => {
        this.alluserComplaints = res;
        console.log(this.alluserComplaints);
      });
    } else {
      console.log('no Complaints');
    }
  }

  removeComplaint(id: any) {
    this.api.removeUserComplaintAPI(id).subscribe((res: any) => {
      this.toaster.warning('complaint deleted');
      this.getUserComplaint();
    });
  }

  
}
