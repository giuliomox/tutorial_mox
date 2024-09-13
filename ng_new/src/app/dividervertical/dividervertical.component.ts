import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { DragDropDropIndicatorDemo } from './drop-down/drop-down.component';

@Component({
  selector: 'divider-vertical-demo',
  standalone: true,
  imports: [DividerModule,PhoneListComponent,DragDropDropIndicatorDemo],
  templateUrl: './dividervertical.component.html',
  styleUrl: './dividervertical.component.css'
})
export class DividerverticalComponent {
  
}
