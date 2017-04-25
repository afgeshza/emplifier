import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from '../model/employee.model';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(employees: Employee[], location: string): Employee[] {
    return employees.filter(employee =>
      employee.gender.toLowerCase() === location
    );
  }

}
