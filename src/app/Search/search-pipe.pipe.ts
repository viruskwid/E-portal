import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {


  transform(data: any[], searchKey: string): any[] {
    const result: any[] = [];
    if (!data || searchKey === "") {
      return data;
    }

    data.forEach(item => {
      // Check for subject and complaintId properties
      if (item.subject && item.subject.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item);
      }
      if (item.complaintId && item.complaintId.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item);
      }
      // Check for date property
      if (item.date && item.date.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
        result.push(item);
      }
    });

    return result;
  }
  }

