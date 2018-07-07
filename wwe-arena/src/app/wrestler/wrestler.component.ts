import { Component, OnInit } from '@angular/core';
import {Fighter} from "../fighter";
import { FIGHTERS } from '../mock-fighters';

@Component({
  selector: 'app-wrestler',
  templateUrl: './wrestler.component.html',
  styleUrls: ['./wrestler.component.css']
})
export class WrestlerComponent implements OnInit {
  fighters = FIGHTERS;	
  fighter : Fighter = {
	  id: 1,
	  name: "UnderTaker"
  };
  constructor() { }

  ngOnInit() {
  }

}
