import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

	private jumbotronHeading:string;
	private jumbotronText:string;
	private jumbotronBtnText:string;
	private jumbotronBtnUrl:string;

  constructor() { 

  	this.jumbotronHeading = 'Jumbotron TypeScript';

  	this.jumbotronText = 'Jumbotron made by Trevor Knott using typescript to implement dynamic content. Welcome to this practice example.';

  	this.jumbotronBtnText = 'Test Test Test';

  	this.jumbotronBtnUrl = 'http://trevorknott.herokuapp.com';


  }

 

}
