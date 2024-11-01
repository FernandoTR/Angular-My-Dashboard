import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="text-3xl mb-5">{{ title }}</h1>`,
})
export class TitleComponent {

@Input({ required: true }) public title!: string;
@Input({ transform: booleanAttribute }) public withShadow: boolean = false;



}
