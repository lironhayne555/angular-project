import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {
  iconClass = "fa-solid fa-user";
  customersTitle = "Customers";

  customers : Array<Customer> = [];

  constructor ( private api : ApiService ) {}

  addCustomerForm = new FormGroup({
    firstName: new FormControl('', {
        validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(200)
        ]
    }),
    lastName: new FormControl('', {
        validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(200)
        ]
    }),
    phone: new FormControl('', {
      validators: [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12)
      ]
  }),
  email: new FormControl('', {
    validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255),
        Validators.email
    ]
}),
   
})

onSubmit() {
    if (this.addCustomerForm.invalid) {
        return;
    }

    this.api.addCustomer(this.addCustomerForm.value).subscribe({
        next: (data: Customer) => {
            this.addCustomerForm.reset();
            this.getCustomers();
        },
        error: (err) => console.log(err)
    })
}
getCustomers() {
    this.api.getCustomers().subscribe({
        next: (data: Array<Customer>) => {
            this.customers = data;
        },
        error: (err) => console.log(err)
    })
}

  ngOnInit(): void {
    this.getCustomers();
  }

  onDelete(customer: Customer) {
    if (!customer._id) {
        return;
    }
    this.api.deleteCustomer(customer._id).subscribe({
        next: (data: Customer) => this.getCustomers(),
        error: (err) => console.log(err)
    })
}

}

