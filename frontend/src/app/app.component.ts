import { Component, Inject, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
  imports: [DashboardComponent, MatButtonModule, MatDialogModule, MatToolbarModule],
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  public appname: string;

  public constructor(private dialog: MatDialog, private titleService: Title, @Inject(DOCUMENT) private document: Document) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.document.body.classList.add(`${environment.theme}-theme`);
  }

  openDialog(ref: TemplateRef<any>): void {
    this.dialog.open(ref, {
      maxWidth: '800px',
    });
  }
}
