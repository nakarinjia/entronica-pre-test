import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit{

constructor(private registerService: RegisterService) {}

ngOnInit(): void {
  console.log('Province', this.registerService.getProvinceList())
}
  
}
