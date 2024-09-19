import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  public email :string = "rafaelagarcia.psi@gmail.com";

  constructor( 
    private sanitizer: DomSanitizer
    ){}

 
}
