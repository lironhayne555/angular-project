import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  iconClass = "fa-sharp fa-solid fa-envelope";
  employeesTitle = "Contacts";
  @Input () email ='';
  filterData: Array<Employee> =[];

  employees : Array<Employee> = [];

  constructor ( private api : ApiService ) {}

  ngOnInit(): void {

    this.getEmployees();
  }


  getEmployees() {
    this.api.getEmployees().subscribe({
        next: (data: Array<Employee>) => {
            this.employees = data
            this.employees.map(employee => employee.birthday ? employee.birthday = this.createDate(employee.birthday) : employee.birthday )
        },
        error: (err) => console.log(err)
    })
}

createDate(birthday: string) : string {
  const date = new Date(birthday);
  const shortDate =  date.toLocaleDateString()
  return shortDate;
}

searchInEmployees(event: any) {
  if(event.target.value === '')
    this.getEmployees();

  this.filterData=this.employees.filter(emp => emp.name?.includes(event.target.value))
  this.employees=this.filterData

}
}
