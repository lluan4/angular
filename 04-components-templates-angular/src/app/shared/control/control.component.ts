import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'handleClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') handleClick() {
  //   console.log('Clicked!');
  // }

  @Input({ required: true }) label!: string;
  // @ContentChild('input') private _control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private _control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  private _el = inject(ElementRef);

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit(): void {
    console.log(this._control());
  }

  handleClick() {
    console.log('Clicked!');
    console.log(this._el);
    console.log(this._control());
  }
}
