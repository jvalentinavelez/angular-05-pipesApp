import { Component } from '@angular/core';

@Component({
  selector: 'pages-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'olivia';
  public nameUpper: string = 'OLIVIA';
  public fullName: string = 'OliVIa';

  public customDate: Date = new Date();
}
