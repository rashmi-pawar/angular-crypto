import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goIndex(item:any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
}
