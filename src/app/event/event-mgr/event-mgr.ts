import {EventManager} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import {Injectable} from '@angular/core';

type ResizeListener = (Window) => void;

@Injectable()
export class EventMgr {

    constructor(private eventManager: EventManager) {}

    private _resizeSubject: Subject<Window>;

    private get resizeSubject(): Subject<Window> {
        if (this._resizeSubject) {
            return this._resizeSubject;
        } else {
            this._resizeSubject = new Subject<Window>();
            this.eventManager.addGlobalEventListener('window', 'resize', event => {
                this._resizeSubject.next(event.target);
            });
            return this._resizeSubject;

        }
    }

    public addWindowResizeListener(handler: ResizeListener, throttleTime: number = 0, debounceTime: number = 0): Subscription {
        let observable = this.resizeSubject.asObservable();
        if (throttleTime > 0) {observable = observable.throttleTime(throttleTime); }
        if (debounceTime > 0) {observable = observable.debounceTime(debounceTime); }
        return observable.subscribe(handler);
    }
}
