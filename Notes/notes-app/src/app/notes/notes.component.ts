import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [
    {text: "Note one"},
    {text: "Note two"}
  ];
  text: string;
  private notesUrl = 'http://localhost:8080/notes';  // URL to web api
  section: string;

  constructor(private httpClient: HttpClient) {
    this.getNotes().subscribe(notes => {
      this.notes = notes;
      console.log(notes);
    });
    this.readNotes();
  }

  ngOnInit() {
  }

  add() {
    let note = {text: this.text, section: this.section};
    this.notes.push(note);
    this.text = "";
    this.addNote(note);
  }

  remove(idx) {
    this.notes.splice(idx, 1);
  }

  getNotes(): Observable<Note[]> {
    // return this.httpClient.get<Note[]>(this.notesUrl)
    //   .toPromise();
    let params: URLSearchParams = new URLSearchParams();
    params.set('section', this.section);
    return this.httpClient.get<Note[]>(this.notesUrl)
      .pipe(map(response => response));
  }

  addNote(note: Note) {
    this.httpClient.post(this.notesUrl, note).toPromise()
      .then(response => {
        this.readNotes();
      });
  }

  readNotes() {
    this.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

}

interface Note {
  text: string;
}
