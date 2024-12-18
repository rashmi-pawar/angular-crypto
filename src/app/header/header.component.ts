import { Component, OnInit , HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLink(item: any) {
    this.router.navigate([item]).then(() => {
      window.location.reload();
    });
  }

}
