import { Observable, Observer } from 'rxjs';
import { distinctUntilChanged, share } from 'rxjs/operators';
import ResizeObserver from 'resize-observer-polyfill';

export interface ResizeEvent {
  target: HTMLElement;
  rect: ClientRect;
}

export function fromResizeObserver(element: HTMLElement): Observable<ResizeEvent> {
  return (Observable.create((observer) => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;

        observer.next({ target: entry.target, rect: entry.contentRect });
      }
    });

    resizeObserver.observe(element);
  }) as Observable<ResizeEvent>);
}