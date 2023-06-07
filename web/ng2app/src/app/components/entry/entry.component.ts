import { Component, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { ApiService } from 'src/app/services/api.service';
import { Observable, Subscription, concatMap, first, take } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {

  @ViewChild('modal') modal!: ModalComponent;

  public description!: string;
  public data: Array<any> = [];
  public offset: number = 4;
  public loading: boolean = false
  public news: any = [
    {
      title: 'Test title 1'
    },
    {
      title: 'Test title 2'
    },
    {
      title: 'Test title 3'
    },
    {
      title: 'Test title 4'
    },
    {
      title: 'Test title 5'
    },
    {
      title: 'Test title 6'
    },
    {
      title: 'Test title 7'
    },
    {
      title: 'Test title 8'
    },
  ]

  constructor(
    private modalService: ModalService,
    private apiService: ApiService,
    ) {
  }
  
  ngOnInit(): void {
    this.apiService.get('album/list', {limit: 4, offset: 0}).subscribe((data: any) => {
      this.data = data
    })
  }

  clickBtn() {
    this.modal.initModal();
    this.modalService.data$.subscribe((data: any) => {
      console.log(data);
    })
  }

  showMore() {
    this.loading = true
    this.apiService.get('album/list', {limit: 4, offset: this.offset}).subscribe((data: any) => {
      // console.log(data);
      this.data = this.data.concat(data)
      this.loading = false
      this.offset += 4;
    })
  }
}
