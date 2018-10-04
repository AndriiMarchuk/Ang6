import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

  constructor(private httpClient: HttpClient) {
    this.getNotes().then(notes=>{
      this.notes=notes;
      console.log(notes);
    });
    this.readNotes();
  }

  ngOnInit() {
  }

  add() {
    let note = {text: this.text};
    this.notes.push(note);
    this.text = "";
    this.addNote(note);
  }

  remove(idx) {
    this.notes.splice(idx, 1);
  }

  getNotes(): Promise<Note[]> {
    return this.httpClient.get<Note[]>(this.notesUrl)
      .toPromise();
  }

  addNote(note:Note) {
    this.httpClient.post(this.notesUrl, note).toPromise()
      .then(response => {
        this.readNotes();
      } );
  }

  readNotes() {
    this.getNotes().then(notes=>{
      this.notes=notes;
    });
  }

}

interface Note {
  text: string;
}

