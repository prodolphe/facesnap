import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapServices } from '../services/face-snap.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  // ...
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapServices) {}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.getFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.removeFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oh Snap!';
    }
  }
}
