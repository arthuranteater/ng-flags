import { Component,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DarkModeService } from './services/DarkModeService'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ng-flags';
  public loggedIn: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private darkModeService: DarkModeService, private router: Router) {  }

  ngOnInit() {
    
    // Client only code.
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme')
      if(theme) {
        if(JSON.parse(theme) === "dark") {
          this.darkModeService.isDark.next(true);
        }
    }
    this.darkModeService.isDark.next(false);
    }
    
  }


}
