import { Component } from '@angular/core';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss'
})
export class EducationFormComponent {

  events:any = [
    {year: new Date().getFullYear(),
      university: 'PSU'
    },
    {year: new Date().getFullYear(),
      university: 'PSU'
    },
    {year: new Date().getFullYear(),
      university: 'PSU'
    },
    {year: new Date().getFullYear(),
      university: 'PSU'
    },
    {year: new Date().getFullYear(),
      university: 'PSU'
    }
  ]

}
