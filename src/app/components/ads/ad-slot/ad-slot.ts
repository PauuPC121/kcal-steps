import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global { interface Window { adsbygoogle: any[]; } }

@Component({
  selector: 'app-ad-slot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ins class="adsbygoogle"
      style="display:block"
      [attr.data-ad-client]="adClient"
      [attr.data-ad-slot]="adSlot"
      [attr.data-ad-format]="adFormat"
      [attr.data-full-width-responsive]="responsive ? 'true' : 'false'"></ins>
  `,
  styles: [``]
})
export class AdSlotComponent implements AfterViewInit {
  @Input() adClient = 'ca-pub-XXXXXXXXXXXXXXX';
  @Input() adSlot = 'YYYYYYYYYY';
  @Input() adFormat: 'auto' | 'rectangle' | 'horizontal' | 'vertical' = 'auto';
  @Input() responsive = true;

  ngAfterViewInit(): void {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }
}
