import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Subject, finalize, first, fromEvent, mergeMap, of, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {

  public model: any = {};
  public initTimeout: number = 100;
  public destroyTimeout: number = 300;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('file') fileInput!: ElementRef;

  private destroy$ = new Subject<void>();

  constructor(private modalService: ModalService, private apiService: ApiService) {}


  ngOnInit(): void {
    this.model.name = ''
    this.model.age = ''
  }
  
  ngAfterViewInit(): void {
  }

  handleFileInput(file: any) {
    const formData = new FormData()
    formData.append('image', file.files[0], file.files[0].name)
    this.apiService.post('file/upload-image', formData).subscribe((response: any) => {
      
    })
  }
  handleFile() {
    const formData: FormData = new FormData()
    formData.append('file', this.fileInput.nativeElement.files[0], this.fileInput.nativeElement.files[0].name)    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initModal() {
    this.modalService.toggleModal(this.modal, 'open')
  }

  destroyModal() {
    this.modalService.toggleModal(this.modal, 'close')
  }


  submitModal(form: NgForm) {
    this.modalService.sendData(this.model)
    form.reset()
    this.destroyModal()
  }
}
