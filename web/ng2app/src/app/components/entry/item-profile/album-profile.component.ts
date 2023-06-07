import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album-profile',
  templateUrl: './album-profile.component.html',
  styleUrls: ['./album-profile.component.scss']
})
export class AlbumProfileComponent {

  public subscription!: Subscription;
  public model: any = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.subscription = this.route.data.subscribe((data: any) => {
      console.log(data);
      this.model = data.data
    })
  }
}
