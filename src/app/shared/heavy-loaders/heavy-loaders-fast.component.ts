import { Component, Input } from '@angular/core';
import DashboardComponent from "../../dashboard/dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />

    </section>
  `,
})
export class HeavyLoadersFastComponent {

  @Input({ required: true }) cssClass!: string;
}
