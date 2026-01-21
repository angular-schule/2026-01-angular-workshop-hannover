import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

@Component({
  templateUrl: './exercise-fromevent.html'
})
export class ExerciseFromevent {

  readonly currentWidth = toSignal(fromEvent<{ target: Window }>(window, 'resize').pipe(

    debounceTime(300),
    map(e => e.target.innerWidth)

  ), { initialValue: 1 });

}
