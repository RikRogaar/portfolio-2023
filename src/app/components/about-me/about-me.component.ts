import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import indefinite from 'indefinite';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  private dateOfBirth = new Date('2004-12-20');

  get getAge() {
    const age = moment().diff(this.dateOfBirth, 'years');
     
    return indefinite(age);
  }
}
