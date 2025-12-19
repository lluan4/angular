import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
// OnDestroy
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private _interval?: ReturnType<typeof setInterval>;
  private _destroyRef = inject(DestroyRef);

  constructor() {
    effect((onCleanup) => {
      console.log(this.currentStatus());

      onCleanup(() => {
        console.log('Cleaning up...');
      });
    });
  }

  ngOnInit(): void {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
        return;
      }

      if (rnd < 0.9) {
        this.currentStatus.set('offline');
        return;
      }

      this.currentStatus.set('unknown');
    }, 1000);

    this._destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   if (this._interval) {
  //     clearInterval(this._interval);
  //   }
  // }
}
