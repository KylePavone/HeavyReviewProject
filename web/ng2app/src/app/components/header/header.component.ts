import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public pageScroll: number = 50;
  @ViewChild('header', { static: false }) header!: ElementRef;
  
  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    
  }

  toggle(hide: boolean = true) { 
    if (hide) {
      this.header.nativeElement.classList.add('header-hide');
    } else {
      this.header.nativeElement.classList.remove('header-hide');
    }
  }  

}
