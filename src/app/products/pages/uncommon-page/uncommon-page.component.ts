import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'pages-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Olivia';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    (this.name = 'Emilio'), (this.gender = 'male');
  }

  //i18nPlural
  public clients: string[] = [
    'Luna',
    'Felix',
    'Milo',
    'Max',
    'Oliver',
    'Oreo',
    'Mojito',
    'Chewbacca',
    'Bizcocho',
    'Nemo',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún gato esperando',
    '=1': 'tenemos un gato esperando',
    '=2': 'tenemos 2 gatos esperando',
    other: 'tenemos # gatos esperando',
  };
  deleteClient(): void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public cat = {
    name: 'Tango',
    age: '2',
    address: 'Ottawa, Canada',
  };

  //Async Pipe
  public myObservableTimer$: Observable<number> = interval(1000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
