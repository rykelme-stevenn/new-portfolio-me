import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborate-companies',
  templateUrl: './colaborate-companies.component.html',
  styleUrls: ['./colaborate-companies.component.css']
})
export class ColaborateCompaniesComponent implements OnInit {

  companies = [
    {
      name: 'Linx',
      source: '../../../assets/images/Linx.jpeg'
    },
    {
      name: 'UseCash',
      source: '../../../assets/images/UseCash.jpeg'
    },
    {
      name: 'Select',
      source: '../../../assets/images/company.svg'
    },
    {
      name: 'Connect',
      source: '../../../assets/images/Connect Parts.jpeg'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }

}
