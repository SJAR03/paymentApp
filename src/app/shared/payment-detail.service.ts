import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url: string = environment.apiUrl + '/PaymentDetail';
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      })
  }

}
