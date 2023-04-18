import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight1]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight1') highlightColor: string | undefined | null;
  @Input() defaultColor: string | undefined;;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
