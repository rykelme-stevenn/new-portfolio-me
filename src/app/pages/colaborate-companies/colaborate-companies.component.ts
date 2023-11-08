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
      name: 'Connect Parts',
      source: '../../../assets/images/Connect Parts.jpeg'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
