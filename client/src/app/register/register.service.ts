import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://raw.githubusercontent.com'

  getProvinceList() {
    return this.http.get(`${this.baseUrl}/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json`).toPromise()
    .then(res => <any[]> res)
    .then(data => { return data; });
  }
}
