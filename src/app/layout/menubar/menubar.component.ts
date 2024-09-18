import { Component } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  public items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'Quem sou?'
      },
      {
        label: 'O que faço?'
      },
      {
          label: 'Formação'
      },
      {
        label: 'Contactos'
      }
    ];
  }
}
