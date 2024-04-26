import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-allusers-admin',
  templateUrl: './allusers-admin.component.html',
  styleUrls: ['./allusers-admin.component.css']
})
export class AllusersAdminComponent implements OnInit {
constructor(private api:ApiService){}
allUser:any=[]
ngOnInit(): void {
  this.users()
}

users(){
  this.api.allUserAPI().subscribe((res:any)=>{
    this.allUser=res
    console.log(this.allUser);
    
  })
}
}
