import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor:string
  @Input() defaultColor:string

  @HostListener('mouseenter') onMouseEnter(){
    this.setHighlightDirective(this.highlightColor|| this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlightDirective(null)
  }

  constructor(private el:ElementRef) {
   }

   setHighlightDirective(color:string){
    this.el.nativeElement.style.backgroundColor = color
   }

}
