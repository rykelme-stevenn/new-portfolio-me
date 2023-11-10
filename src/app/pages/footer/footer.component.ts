import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { faLinkedin, faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMail = faEnvelope;
  faAngular = faAngular;

  constructor() { }

  ngOnInit(): void {
  }

}
