import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
   
  }

  constructor() { }

  ngOnInit() {
  }

}
