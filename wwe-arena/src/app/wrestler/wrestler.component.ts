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
	selectedFighter: Fighter;

	onSelect(fighter: Fighter): void {
	  this.selectedFighter = fighter;
	}
  constructor() { }

  ngOnInit() {
  }

}
