import {Component, ElementRef, Input, signal, ViewChild} from '@angular/core';
import WaveSurfer from "wavesurfer.js";

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required : true}) audioUrl= '';
  @ViewChild('waveform') waveContainer!: ElementRef;
  private waveSurfer! : WaveSurfer;
  isPlaying = signal(false);

  protected ngAfterViewInit() {

    this.waveSurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.waveContainer.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });

    this.waveSurfer.on('play', () => {
      this.isPlaying.update(() => true);
    });

    this.waveSurfer.on('pause', () => {
      this.isPlaying.update(() => false);
    });

  }

  protected playPause() {
    this.waveSurfer.playPause();
  }

}
