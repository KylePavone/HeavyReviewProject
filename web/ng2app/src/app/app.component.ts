import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { ModalService } from './services/modal.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heavyReview';
  public root: boolean = true;
  public subscription!: Subscription;
  @ViewChild('mainNav') mainNav!: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.router.url !== '/') {
      this.subscription = this.route.data.subscribe((data: any) => {        
        this.root = false
      })
    }
  }

  ngAfterViewInit() {
    this.hideNav()
  }

  hideNav() {
    console.log(this.mainNav);
    const navClickEvent = fromEvent(this.mainNav.nativeElement, 'click')
    navClickEvent.subscribe((event: any) => {
      if (event.target.classList.contains('main-nav-hide-button')) {
        this.mainNav.nativeElement.classList.add('nav-move-out')
        setTimeout(() => {
          this.mainNav.nativeElement.classList.add('nav-disappear')
        }, 300)
      } 
    })
  }

  isRoot() {
    return this.router.url === '/'
  }
}
