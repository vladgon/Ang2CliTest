import {EventManager} from '@angular/platform-browser';
import {Observable, Subject, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import {debounceTime, throttleTime} from 'rxjs/operators';

type ResizeListener = (Window) => void;

@Injectable()
export class EventMgr {

    constructor(private eventManager: EventManager) {
    }

    private get resizeSubject(): Subject<Window> {
        const resizeSubject = new Subject<Window>();
        this.eventManager.addGlobalEventListener('window', 'resize', event => {
            resizeSubject.next(event.target);
        });
        return resizeSubject;

    }

    public addWindowResizeListener(handler: ResizeListener, throttle: number = 0, debounce: number = 0): Subscription {
        return this.resizeSubject.pipe(
            (throttle > 0 ? throttleTime(throttle) : (s: Observable<Window>) => s),
            (debounce > 0 ? debounceTime(debounce) : (s: Observable<Window>) => s)
        ).subscribe(handler);
    }
}
