import {Component, signal} from '@angular/core';
import {CounterComponent} from "../../../shared/components/counter/counter.component";
import {WaveAudioComponent} from "../../components/wave-audio/wave-audio.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    WaveAudioComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  protected duration = signal(1);
  protected message = signal('Hello World');

  protected changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.update( () => input.valueAsNumber );
  }

  protected changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.update( () => input.value );
  }

}
