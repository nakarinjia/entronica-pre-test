import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://raw.githubusercontent.com'

  getProvinceList() {
    this.http.get(`${this.baseUrl}/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json`).subscribe({
      next: (res) => {
        console.log('res',res)
      }
    })
  }
}
