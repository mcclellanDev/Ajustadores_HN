import { Directive, OnInit, Output, EventEmitter, HostListener, Injectable } from '@angular/core';

@Directive({
  selector: '[appPress]'
})

@Injectable({
  providedIn: 'root'
})
export class PressDirective implements OnInit {

  @Output() press = new EventEmitter();
  pressGesture = {
    name: 'press',
    enabled: false,
    interval: 251
  }

  pressTimeout = null;
  isPressing:boolean=false;
  lasTap = 0;
  tapCount = 0;
  tapTimeout = null;

  constructor() { }
  ngOnInit(): void {
    this.pressGesture.enabled = true;
  }

  @HostListener('touchstart', ['event'])
  @HostListener('touchend', ['event'])
  onPress(event){
    console.log(event)
    if (!this.pressGesture.enabled) {
      return;
    }
    this.handlePressing(event.type);
  }
  handlePressing(type: any) {
    if (type == 'touchstart') {
      this.pressTimeout = setTimeout(() => {
        this.isPressing = true;
        this.press.emit('start');
      },  this.pressGesture.interval);
    }else if(type == 'touchend') {
      clearTimeout(this.pressTimeout);
      this.press.emit('end');
      this.resetTaps();
    }
    setTimeout(() => {
      this.isPressing = false;
    }, 50);
  }
  resetTaps() {
    clearTimeout(this.tapTimeout);
    this.tapCount = 0;
    this.tapTimeout = null;
    this.lasTap = 0;
  }

}
