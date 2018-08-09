import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'hi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hi';

  constructor(private matIcon: MatIconRegistry, private domSan: DomSanitizer) {
    this.matIcon.addSvgIcon('hi-logo', this.domSan.bypassSecurityTrustResourceUrl('assets/hi-logo.svg'));
  }
}
