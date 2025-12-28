import { Component, DOCUMENT, Inject, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@Component({
  imports: [DashboardComponent, MatButtonModule, MatDialogModule, MatToolbarModule],
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public appname: string;

  public constructor(private dialog: MatDialog, private titleService: Title, @Inject(DOCUMENT) private document: Document) {
    this.appname = environment.appname;
    this.titleService.setTitle(this.appname);
    this.document.body.classList.add(`${environment.theme}-theme`);
  }

  openDialog(ref: TemplateRef<Element>): void {
    this.dialog.open(ref, {
      maxWidth: '800px',
    });
  }
}
