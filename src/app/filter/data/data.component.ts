import { Component, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  @Input() printData:any;
 @Output() editRequested = new EventEmitter<number>();

  onEdit(index: number) {
    this.editRequested.emit(index);

}
}


