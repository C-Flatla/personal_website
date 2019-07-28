import { Component, OnInit } from '@angular/core';
import changelogData from 'src/assets/changelog-data.json';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {
  changelogData = changelogData;

  constructor() { }

  ngOnInit() { }
}
