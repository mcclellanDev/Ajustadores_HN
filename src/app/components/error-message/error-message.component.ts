import { Component, OnInit, Input } from '@angular/core';
import { IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
@Input() message: string;

  constructor() { }

  ngOnInit() {}

}
