import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  public items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Introdução',
          command: () => this.scroller.scrollToPosition([0,0])
      },  
      {
          label: 'Quem sou?',
          command: () => this.onScrollToAnchor("whoami")
      },
      {
        label: 'O que faço?',
        command: () => this.onScrollToAnchor("functions")
      },
      {
          label: 'Formação',
          command: () => this.onScrollToAnchor("studies")
      },
      {
        label: 'Contactos',
        command: () => this.scroller.scrollToAnchor("contacts")
      },
      {
        label: 'Mande uma mensagem sem compromissos',
        style: {'margin-left': 'auto'},
        icon: 'pi pi-whatsapp'
      }
    ];
  }

  constructor(private scroller: ViewportScroller) {}

  onScrollToAnchor(id: string) {
    this.scroller.scrollToAnchor(id)
  }
   

}
