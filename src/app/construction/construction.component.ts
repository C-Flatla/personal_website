import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {
  message = 'This site is currently under construction';

  constructor() { }

  ngOnInit() {
  }
}
