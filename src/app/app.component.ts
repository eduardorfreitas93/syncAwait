import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  proj;

  ngOnInit() {
    this.main();
  }

  // sync
  async main() {
    for (let i = 0; i < 5; i++) {
      this.proj = await this.delay();
        console.log(this.proj);
    }
    console.log('--------------------');
  }

  delay() {
      return new Promise(resolve => setTimeout(() => resolve('aqwerty'), 1000));
  }

  // async
  main2() {
    for (let i = 0; i < 5; i++) {
      this.delay2().then((res) => {
        this.proj = res;
        console.log(this.proj);
      });
    }
    console.log('--------------------');
  }

  delay2() {
    return new Promise(resolve => setTimeout(() => resolve('aqwerty'), 1000));
  }
}
