import { Component, OnInit } from '@angular/core';
import changelogData from 'src/assets/changelog-data.json';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})

export class ChangelogComponent implements OnInit {
  changelogData: any = changelogData;

  constructor() {
    this.changelogData.forEach((entry: any) => {
      entry.date = new Date(entry.date).toLocaleString();
      entry.commitUrl = `https://github.com/C-Flatla/personal_website/commit/${entry.commit}`;
      entry.subject = entry.subject.replace(/\(#(\d*)\)/gm, '(<a href="https://github.com/C-Flatla/personal_website/pull/$1">#$1</a>)');
    });
  }

  ngOnInit() { }
}
