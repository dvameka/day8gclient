import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})



export class ListitemComponent implements OnInit {



  @Input()
  //filmResult : string[]; 
  passResult : string[];

  constructor() { }

  ngOnInit() {
  }

}
