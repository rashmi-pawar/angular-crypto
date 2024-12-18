import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLink(item: any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
}
