import { Component, DOCUMENT, TemplateRef, inject } from '@angular/core';
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
  private dialog = inject(MatDialog);
  private titleService = inject(Title);
  private document = inject<Document>(DOCUMENT);

  public appname: string;

  public constructor() {
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
