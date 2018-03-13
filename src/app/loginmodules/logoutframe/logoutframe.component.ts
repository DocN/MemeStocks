import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../sessions.service';

@Component({
  selector: 'app-logoutframe',
  templateUrl: './logoutframe.component.html',
  styleUrls: ['./logoutframe.component.css']
})
export class LogoutframeComponent implements OnInit {

  constructor(private session:SessionsService) { }

  ngOnInit() {
    this.session.logoutSession();
  }

}
