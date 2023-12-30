import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { environment } from '../environments/environment';
import { AccountRead } from './interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budget';
  public allAccounts = new MatTableDataSource<AccountRead>();
  public columnsToDisplay: string[] = ['name', 'balance'];

  constructor(private _http: HttpClient) {
    console.log(environment.apiURL); // Logs false for development environment
  }

  ngOnInit() {
    this._http
      .get<AccountRead[]>(`${environment.apiURL}/account`)
      .subscribe((data) => {
        console.table(data);
        this.allAccounts = new MatTableDataSource<AccountRead>(data);
      });
  }
}
