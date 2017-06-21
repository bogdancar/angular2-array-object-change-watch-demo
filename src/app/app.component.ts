import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  testList = [];

  // here we only push to array each 5 seconds to be able to watch the changes
  ngOnInit() {
    // method to add an object at a given period of time to test the watch
    Observable.interval(5000).subscribe(x => {
      this.testList.push('something');
    });
  }

}
