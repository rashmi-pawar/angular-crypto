import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLink(item: any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }
  ngAfterViewInit() {
    $('.selectpicker').selectpicker();
  }
}
