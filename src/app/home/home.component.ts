import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     //Navbar top scroll down & up
     var lastScrollTop = 0;
     var $navbar = $('.navbartop');
     //Hide navbar at first
     $navbar.hide();
     $(window).scroll(function(){
     var st = $(this).scrollTop();
     if (st > lastScrollTop) { // scroll down
          $navbar.slideDown()
     } else if(st < 100){ // scroll up
          $navbar.slideUp()
     }
     lastScrollTop = st;
     });
  }
}
