import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-vlad',
  templateUrl: './vlad.component.html',
  styles: []
})

export class VladComponent {
  msg = 'Message';
  showAlert = true;

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

    // @HostListener("click", ['$event'])
    // private handleClick(event: Event) {
    //   alert(new ElementRef(event.target).nativeElement.id)
    // }
}
