import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  answer: any;
  location: string;

  constructor(private http: HttpClient) {}

  search() {
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=NkDtt6HoC3XjS6G6K3Jsz8k83G9b5Jf6&limit=1&q=' + this.location)
    .subscribe((answer) => {
      this.answer = answer;
      console.log(this.answer);
    })
  }
}
