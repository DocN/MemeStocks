import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logcheck = 0;
  username = '';
  balance = 0;
  avatarurl = '';

  constructor(private session:SessionsService) { }

  ngOnInit() {
    this.checkLogged();
    this.session.sessUpdate.subscribe(value => {
      this.checkLogged();
      this.username = this.session.returnUsername();
      this.balance = this.session.returnBalance();
      this.avatarurl = this.session.returnAvatar();
    });
    this.session.reloadSession();
  }

  checkLogged() {
    if(this.session.getLoggedOn() == 1) {
      this.logcheck = 1;
    }
    else {
      this.logcheck = 0;
    }
  }

}
