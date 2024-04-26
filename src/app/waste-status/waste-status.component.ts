import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-waste-status',
  templateUrl: './waste-status.component.html',
  styleUrls: ['./waste-status.component.css']
})
export class WasteStatusComponent implements OnInit {
  searchKey:string=""
  userWaste: any;
  SERVER_URL = 'http://localhost:3000/uploads';

  constructor(private api: ApiService,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.userWastes()
  }

  userWastes() {
    this.api.userWasteAPI().subscribe({
      next: (res: any) => { // Use arrow function to retain `this` context
        this.userWaste = res;
        console.log(this.userWaste);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  removeWaste(wasteId:any){
    this.api.removeWasteAPI(wasteId).subscribe((res:any)=>{
      this.toaster.success(`${wasteId} deleted successfully`)
      this.userWastes()
    })
  }
}
