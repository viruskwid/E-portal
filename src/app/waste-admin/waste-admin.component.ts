import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-waste-admin',
  templateUrl: './waste-admin.component.html',
  styleUrls: ['./waste-admin.component.css']
})
export class WasteAdminComponent implements OnInit {
  wasteData: any; // Declare object variable to hold the response
  sub:any=[]
  SERVER_URL = 'https://eportalserver.onrender.com/uploads';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.allWasteReport()
  }

  allWasteReport() {
    this.api.allWasteAPI().subscribe({
      next: (res: any) => {
        this.wasteData = res; // Assign the response to the object variable
        console.log(this.wasteData);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  details(waste:any){
    this.sub=waste
  }
}
