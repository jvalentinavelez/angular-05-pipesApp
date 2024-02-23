import { Component } from '@angular/core';

@Component({
  selector: 'pages-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Olivia';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    (this.name = 'Emilio'), (this.gender = 'male');
  }
}
