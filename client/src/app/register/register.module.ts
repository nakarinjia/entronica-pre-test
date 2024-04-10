import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { ContactFormComponent } from './shared/contact-form/contact-form.component';
import { EducationFormComponent } from './shared/education-form/education-form.component';
import { ExperienceFormComponent } from './shared/experience-form/experience-form.component';
import { SkillFormComponent } from './shared/skill-form/skill-form.component';
import { GuildFormComponent } from './shared/guild-form/guild-form.component';
import { InterestFormComponent } from './shared/interest-form/interest-form.component';
import { CardModule } from 'primeng/card'
import { TabViewModule } from 'primeng/tabview'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelModule } from 'primeng/panel';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { SliderModule } from 'primeng/slider';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    RegisterFormComponent,
    UserFormComponent,
    ContactFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    SkillFormComponent,
    GuildFormComponent,
    InterestFormComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    TabViewModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    PanelModule,
    InputMaskModule,
    CalendarModule,
    FileUploadModule,
    DividerModule,
    TimelineModule,
    SliderModule,
    ChipsModule,
    AutoCompleteModule
  ],
  exports: [
    RegisterFormComponent,
    UserFormComponent,
    ContactFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    SkillFormComponent,
    GuildFormComponent,
    InterestFormComponent
  ]
})
export class RegisterModule { }
