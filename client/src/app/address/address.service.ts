import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import province from '../../assets/data/province.json'
import district from '../../assets/data/district.json'
import subDistrict from '../../assets/data/sub-district.json'
import _filter from 'lodash/filter'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  loadProvince() {
    return province
  }

  


}
