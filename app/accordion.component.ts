import { Component } from '@angular/core';
@Component({
  selector: 'accordion',
  templateUrl: './../app/accordion.component.html',
})
export class AccordionComponent {
  public toggle : boolean = false ;

  togglediv(){
      this.toggle = !this.toggle;
  }
}
