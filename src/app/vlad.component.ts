import {Component, HostBinding, Renderer2} from '@angular/core';
import {slideInDownAnimation} from './animations';

@Component({
    selector: 'wg-vlad',
    templateUrl: './vlad.component.html',
    animations: [slideInDownAnimation]
})

export class VladComponent {
    @HostBinding('@leftInBottomOut') animation;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    msg = 'Message';
    showAlert = true;
    ids = [1, 2, 3];

    constructor(private renderer: Renderer2) {
        // setInterval(() => {
        //   let date = new Date();
        //   this.msg = `${date.toLocaleTimeString()}: ${date.getUTCMilliseconds().toString()}`;
        // }, 1000);
    }

    click(msg: string) {
        this.showAlert = !this.showAlert;
        this.msg = `${msg}  - ${new Date().toTimeString()}`;
    }

    closeAlert() {
        this.showAlert = false;
    }

    // @HostListener("click", ['$event'])
    // private handleClick(event: Event) {
    //   alert(new ElementRef(event.target).nativeElement.id)
    // }
}
