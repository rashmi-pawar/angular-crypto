import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live-coin',
  templateUrl: './live-coin.component.html',
  styleUrls: ['./live-coin.component.scss']
})
export class LiveCoinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goIndex(item:any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
}
