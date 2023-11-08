import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css']
})
export class WhoIAmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yearsAgo(){
    let year = new Date()
    return year.getFullYear() - 2021
  }

}
