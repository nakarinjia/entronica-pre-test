import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressFormService {

  constructor(private fb: FormBuilder) { }

  toAddressFormGroup() {
    return this.fb.group({
      province: [null, Validators.required],
      district: [null, Validators.required],
      subDistrict: [null],
      zipCode: [null, Validators.required],
    })
  }
}
