import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {
  public email :string = "rafaelagarcia.psi@gmail.com";

  constructor( 
    private sanitizer: DomSanitizer
    ){}
}
