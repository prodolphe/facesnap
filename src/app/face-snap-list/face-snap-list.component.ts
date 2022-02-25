import { Component, OnInit } from '@angular/core';
import { FaceSnapServices } from '../services/face-snap.services';
import { FaceSnap } from './../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {


  faceSnaps!: FaceSnap[];

  constructor( private faceSnapService : FaceSnapServices) { }

  ngOnInit(): void {

    this.faceSnaps = this.faceSnapService.getAllFaceSnapService() ;
  }

}
