import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AccountRead } from './interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget';

  constructor(private _http: HttpClient) {
    console.log(environment.apiURL); // Logs false for development environment
  }

  ngOnInit() {
    this._http
      .get<AccountRead>(`${environment.apiURL}/account`)
      .subscribe((data) => {
        console.table(data);
      });
  }
}
