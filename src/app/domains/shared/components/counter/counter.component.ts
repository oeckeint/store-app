import {Component, Input, signal, SimpleChanges} from '@angular/core';
import {repeat} from "rxjs";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  //2. Input properties are set
  @Input({required : true}) duration = 0;
  @Input({required : true}) message = '';

  protected counter = signal(0);
  protected counterRef : number | undefined;

  constructor() {
    //No Async calls in constructor
    //1. Creates an instance of the component and calls the constructor
    console.log('-> CounterComponent created');
  }

  protected ngOnChanges(changes: SimpleChanges) {
    //3. After the input properties are set and the properties have changed
    //Also called when any change detection is triggered for @Input properties
    console.log('-> CounterComponent changed');
    console.log('Changes:', changes);
    if (changes['duration']) {
      this.doSomething();
    }
  }

  protected ngOnInit() {
    //4. After the ngOnChanges after all the input properties are set
    //Before Rendering the component
    console.log('-> CounterComponent initialized');
    this.counterRef = window.setInterval(() => {
      console.log('running interval');
      this.counter.update((currentValue) => currentValue + 1 );
    },
    1000);
  }

  protected ngAfterViewInit() {
    //5. After the component is rendered & child components were rendered
    console.log('-> CounterComponent rendered');
  }

  protected ngOnDestroy() {
    //7. Before the component is destroyed
    window.clearInterval(this.counterRef);
    console.log('-> CounterComponent destroyed');
  }

  private doSomething() {
    console.log('-> CounterComponent doSomething');
  }

}
