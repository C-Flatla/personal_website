import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent implements OnInit {
  copyrightYear: number;

  ngOnInit() {
    this.getCopyrightYear();
  }

  getCopyrightYear() {
    this.copyrightYear = new Date().getFullYear();
  }

}
