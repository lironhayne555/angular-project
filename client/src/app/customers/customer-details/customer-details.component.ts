import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomersDetailsComponent  implements OnInit{
  customer : Customer | null = null;
  iconClass = "fa-solid fa-user";
  customersTitle = "Customer Details";

  customerDetailsForm = new FormGroup({
    firstName: new FormControl<string | null>('',{}),
    lastName: new FormControl<string | null>('',{}),
    phone: new FormControl<string | null>('',{}),
    email: new FormControl<string | null>('',{}),
    address: new FormControl<string | null>('',{}),
  })

  constructor( private api: ApiService,
              private activeRoute: ActivatedRoute,
              private router: Router ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(
        switchMap(params => {
            const id = params.get('id') as string;
            return this.api.getOneCustomer(id);
        })
    ).subscribe({
        next: (data: Customer) => {
            this.customer = data;
            const firstName = data.firstName || '';
            const lastName = data.lastName || '';
            const phone = data.phone || '';
            const email = data.email || '';
            const address = data.address || '';
            this.customerDetailsForm.get('firstName')?.setValue(firstName);
            this.customerDetailsForm.get('lastName')?.setValue(lastName);
            this.customerDetailsForm.get('phone')?.setValue(phone);
            this.customerDetailsForm.get('email')?.setValue(email);
            this.customerDetailsForm.get('address')?.setValue(address);
        },
        error: (err) => console.log(err)
    })
}

  
}
