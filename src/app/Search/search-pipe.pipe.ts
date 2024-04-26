import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(userWaste:any[],searchKey:string): any[] {
    const result: any= []
    if(!userWaste || searchKey ==""){
      return userWaste
    }
    userWaste.forEach((item=>{
      if(item.date?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    }))

    return result;
  }
  }

