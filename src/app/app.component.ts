import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeNavigation = `recipe`;

  onNavigationChanged(navName: string) {
    this.activeNavigation = navName;
  }
}
