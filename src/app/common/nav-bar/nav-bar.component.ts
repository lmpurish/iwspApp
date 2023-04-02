import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showMe: boolean = true;
  hiddenMe: boolean = true;

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  show() {
    this.showMe = !this.showMe;
    
  }

  hidden() {
    this.hiddenMe = !this.hiddenMe;
  }
}
