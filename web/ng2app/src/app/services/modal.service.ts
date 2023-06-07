import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type modalEvent = "open" | "close";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private data: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public data$: Observable<any> = this.data.asObservable();

  constructor() {}

  sendData(data: any) {
    this.data.next(data)
  }

  toggleModal(modal: any, event: modalEvent) {
    return new Promise((resolve: any) => {
      event === 'open' ? modal.nativeElement.classList.add('modal-init') : modal.nativeElement.classList.remove('modal-show')
      modal.nativeElement.classList.add('modal-init')
      resolve(modal)
    }).then((modal: any) => {
      setTimeout(() => {
        event === 'open' ? modal.nativeElement.classList.add('modal-show') : modal.nativeElement.classList.remove('modal-init')
      }, event === 'open' ? 100 : 300);
    })
  }

}
