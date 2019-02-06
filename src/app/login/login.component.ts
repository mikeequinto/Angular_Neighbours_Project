import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
          $navbar.slideDown('slow')
     } else if(st < 100){ // scroll up
          $navbar.slideUp('slow')
     }
     lastScrollTop = st;
     });
  }

}
