import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  
  public load: boolean = false
  private spin: BehaviorSubject<any> = new BehaviorSubject(this.load);
  public spin$: Observable<any> = this.spin.asObservable();

  constructor() { }

  
  spinning() {
    this.load = true
    this.spin.next(this.load)
  }

  stopSpinnig() {
    this.load = false
    this.spin.next(this.load)
    // this.spin.complete()
  }
}
