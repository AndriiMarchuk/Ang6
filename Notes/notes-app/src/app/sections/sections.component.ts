import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sections-component',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  private sectionsUrl = 'sections'; // URL to web api
  sections: Section[];
  private activeSection: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  readSections() {
    this.getSections().subscribe(sections => {
      this.sections = sections;
      if (this.activeSection == null && this.sections.length>0) {
        this.showSection(this.sections[0]);
      }
    });
  }

  getSections(): Observable<Section[]> {
    return this.httpClient.get<Section[]>(this.sectionsUrl)
      .pipe(
        map(response => response)
      );
  }

  showSection(section:Section) {
    this.activeSection = section.title;
  }
}

interface Section {
  _id: string;
  title: string;
}
