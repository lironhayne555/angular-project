import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer, Employee, User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serverURL= "http://localhost:3000/";

  private userInfo='';

  private TOKEN_KEY= 'token';
  
  constructor(private http: HttpClient) { }

  // call the function when the user signup
  setToken(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value);
}

  // call the function when the user login
  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) || '';
}

  // call the function when the user click on logout
  deleteToken() {
    localStorage.removeItem(this.TOKEN_KEY);
}

  POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
    return this.http.post<DynamicType>(
      `${this.serverURL}${endpoint}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': this.getToken()
        }
      }
    )
  }
  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
    return this.http.get<DynamicType>(
        `${this.serverURL}${endpoint}`,
        {
            headers: {
                'x-auth-token': this.getToken()
            }
        }
    )
}

  login(user: User): Observable<User> {
    return this.POST<User>('users/login', user);
}

  addCustomer(customer: Customer) : Observable<Customer> {
    return this.POST<Customer>('customers',customer);
   }

   getCustomers(): Observable<Array<Customer>> {
    return this.GET<Array<Customer>>('customers')
   }

   getOneCustomer(id: String): Observable<Customer> {
    return this.GET<Customer>(`customers/${id}`);
   }

   updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
        `${this.serverURL}customers/${id}`,
        customer,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.getToken()
            }
        }
    )
}

deleteCustomer(id: string): Observable<Customer> {
  return this.http.delete<Customer>(
      `${this.serverURL}customers/${id}`,
      {
          headers: {
              'x-auth-token': this.getToken()
          }
      }
  )
}
getEmployees(): Observable<Array<Employee>> {
  return this.GET<Array<Employee>>('employees')
 }

 setUserInfo(value: string)
 {
  localStorage.setItem(this.userInfo, value)
 }

 getUserInfo(): string{
  const user = JSON.parse(localStorage.getItem(this.userInfo) || '');
  return user
 }
}
