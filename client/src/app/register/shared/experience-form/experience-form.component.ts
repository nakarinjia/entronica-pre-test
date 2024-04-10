import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.scss'
})
export class ExperienceFormComponent {
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
