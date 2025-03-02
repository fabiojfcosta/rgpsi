import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  public email :string = "rafaelagarcia.psi@gmail.com";
  public ig :string = "https://www.instagram.com/1minutosobre.psi?igsh=MWhsM2dzaG5yY2YzNQ==";

  constructor( 
    private sanitizer: DomSanitizer
    ){}

 
}
