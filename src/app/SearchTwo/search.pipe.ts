import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(alluserComplaints:any[],searchKey:string): any[] {
    const result: any= []
    if(!alluserComplaints || searchKey ==""){
      return alluserComplaints
    }
    alluserComplaints.forEach((item=>{
      if(item.subject?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
      if(item.complaintId?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    }))

    return result;
  }

}
