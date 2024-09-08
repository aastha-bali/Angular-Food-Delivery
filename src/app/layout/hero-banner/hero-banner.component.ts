import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  @Input() imageUrl!: string ;
  @Input() title!: string ;
  @Input() subtitle!: string;
  @Input() ctaText!: string ;
  @Input() ctaLink!: string ;
}
