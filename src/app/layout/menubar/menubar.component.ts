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
  public itemsResponsive: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
      {
          label: 'Início',
          command: () => this.scroller.scrollToPosition([0,0])
      }, 
      {
          label: 'Quem sou?',
          command: () => this.onScrollToAnchor("whoami")
      },
      {
          label: 'Abordagem Clínica',
          command: () => this.onScrollToAnchor("approach")
      },  
      {
        label: 'O que faço?',
        command: () => this.onScrollToAnchor("functions")
      },
      {
          label: 'Informações',
          command: () => this.onScrollToAnchor("info")
      },
      {
          label: 'Preços',
          command: () => this.onScrollToAnchor("payment")
      },
      {
          label: 'Formação',
          command: () => this.onScrollToAnchor("studies")
      },
      {
        label: 'Contactos',
        command: () => this.onScrollToAnchor("contacts")
      },
      {
        label: 'Agende uma consulta',
        style: {'margin-left': 'auto'},
        icon: 'pi pi-calendar-clock',
        command: () => this.openWhatsapp()
      }
    ];

    this.itemsResponsive = [
    {
        label: 'Início',
        style: {'padding': '2px'},
        command: () => this.scroller.scrollToPosition([0,0])
    },
    {
      label: 'Contactos',
      command: () => this.onScrollToAnchor("contacts")
    },
    {
      label: 'Consultas',
      style: {'margin-left': 'auto'},
      icon: 'pi pi-calendar-clock',
      command: () => this.openWhatsapp()
    }
  ];

  }

  constructor(private scroller: ViewportScroller) {}

  onScrollToAnchor(id: string) {
    this.scroller.scrollToAnchor(id)
  }
   
  openWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=928269839", "_blank");
  }
}
