import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { faLinkedin, faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { EmailService } from 'src/app/services/email-provide.service';

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

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  openEmail(): void {
    const destinatario = 'rykelmesteven@outlook.com';
    const assunto = 'Assunto do E-mail';
    const corpo = 'Corpo do E-mail';

    this.emailService.enviarEmail(destinatario, assunto, corpo);
  }

}
