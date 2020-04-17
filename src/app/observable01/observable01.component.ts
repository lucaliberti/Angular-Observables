import { Component, OnInit } from '@angular/core';
import { of, Observable, Observer } from 'rxjs';   // importare questo modulo

@Component({
  selector: 'app-observable01',
  templateUrl: './observable01.component.html',
  styleUrls: ['./observable01.component.css']
})

export class Observable01Component implements OnInit {



  // "of" emette una sequeza di valori, alla fine emette la notifica "complete" 
  // of restituisce un observable 
  myObservable: Observable<Object> = of('x1', 'x2', 'x3');

  myObserver = {
    next:     (x: string)   => console.log('Observer1: ho ricevuto il dato: ' + x),
    error:    (err: string) => console.error('Observer1: ho ricevuto un errore: ' + err),
    complete: ()            => console.log('Observer1: ho ricevuto un complete. Bye'),
  };

 

  makeSubscription(): void {
    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // restituisce un oggetto ISubscription
    this.myObservable.subscribe(this.myObserver);
  }

  constructor() { }
  ngOnInit() { }

}
