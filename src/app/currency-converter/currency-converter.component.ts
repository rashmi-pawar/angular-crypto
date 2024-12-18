import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goIndex(item:any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
}
