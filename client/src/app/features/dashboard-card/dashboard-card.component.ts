import { Component, Input } from '@angular/core';
import { LastPost } from '../dashboard/last-post';

@Component({
  selector: 'pm-dashboard-card',
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {

  @Input() lastPost!: LastPost;
  @Input() usingType!: string;

  constructor() { }
}
