import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') preivate _form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons?: QueryList<ButtonComponent>;
  // @Output() add = new EventEmitter();
  add = output<{ title: string; text: string }>();
  formInput: { title: string; text: string } = { title: '', text: '' };

  private _form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit(): void {
    console.log('After view INIT');
    console.log(this._form());
    // console.log(this.buttons);
    // this.buttons?.forEach((button) => {
    //   console.log(button);
    // });
  }

  handleSubmit() {
    this.add.emit(this.formInput);
    this._form().nativeElement.reset();
  }
}
