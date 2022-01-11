import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'shopify-shared-post-layout',
  templateUrl: './shared-post-layout.component.html',
  styleUrls: ['./shared-post-layout.component.scss']
})
export class SharedPostLayoutComponent implements OnInit {

  data = {
    "copyright": "Cory Poole",
    "date": "2021-12-20",
    "explanation": "This picture was supposed to feature a comet. Specifically, a series of images of the brightest comet of 2021 were being captured: Comet Leonard.  But the universe had other plans. Within a fraction of a second, a meteor so bright it could be called a fireball streaked through just below the comet. And the meteor's flash was even more green than the comet's coma.  The cause of the meteor's green was likely magnesium evaporating from the meteor's pebble-sized core, while the cause of the comet's green was likely diatomic carbon recently ejected from the comet's city-sized nucleus. The images were taken 10 days ago over the Sacramento River and Mt. Lassen in California, USA. The fireball was on the leading edge of this year's Geminid Meteor Shower -- which peaked a few days later. Comet Leonard is now fading after reaching naked-eye visibility last week -- but now is moving into southern skies.   Almost Hyperspace: Random APOD Generator",
    "hdurl": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_2250.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "The Comet and the Fireball",
    "url": "https://apod.nasa.gov/apod/image/2112/LeonardMeteor_Poole_960.jpg"
    };
    
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
  }

}
