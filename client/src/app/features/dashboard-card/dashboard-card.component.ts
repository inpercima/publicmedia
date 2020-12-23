import { Component, Input } from '@angular/core';
import { Post } from '../dashboard/post';

@Component({
  selector: 'pm-dashboard-card',
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {

  @Input() lastPost!: Post;
  @Input() usingType!: string;

  constructor() { }

  isSuccess(): boolean {
    return this.lastPost.responseCode !== undefined && this.lastPost.responseCode.includes('200');
  }
}
