import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register.service';
import _filter from 'lodash/filter'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit{

constructor(private registerService: RegisterService) {}

selectedCountry: any;
filteredCountries: any[] = []
provinceList: any[] = []

  ngOnInit(): void {
    this.registerService.getProvinceList().then(provinceList => {
      this.provinceList = provinceList
    })
  }
  
  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    console.log('provinceList', this.provinceList)

    filtered = _filter(this.provinceList, province => province.name_th == query)

    console.log('res',filtered)
    // for(let i = 0; i < this.provinceList.length; i++) {
    //     let country = this.provinceList[i];
    //     if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //         filtered.push(country);
    //     }
    // }

    this.filteredCountries = filtered;
}
}
