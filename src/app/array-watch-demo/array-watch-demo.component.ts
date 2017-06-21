import { Component, Input, IterableDiffers, DoCheck } from '@angular/core';

@Component({
  selector: 'app-array-watch-demo',
  templateUrl: './array-watch-demo.component.html',
  styleUrls: ['./array-watch-demo.component.css']
})
export class ArrayWatchDemoComponent implements DoCheck {

  @Input() datasource: Array<any> = [];

  containerHeight = 25;
  differ: any;

  constructor(differs: IterableDiffers) {
     this.differ = differs.find([]).create(null);
   }

  ngDoCheck() {
    const change = this.differ.diff(this.datasource);
    console.log(change);
    this.containerHeight = 25 * (this.datasource.length + 1);
    // here you can do what you want on array change
    // you can check for forEachAddedItem or forEachRemovedItem on change object to see the added/removed items
    // Attention: ngDoCheck() is triggered at each binded variable on componenet; if you have more than one
    // in your component, make sure you filter here the one you want.
  }

}
