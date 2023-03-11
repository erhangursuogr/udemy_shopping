import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  @Input() totalPrice: number = 0;
  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  payment(){
    this.myEvent.emit({data: this.totalPrice});
    document.getElementById("modalCloseButton")?.click();
  }

}
