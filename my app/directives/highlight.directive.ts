import { Directive, OnInit, ElementRef, Input, Renderer, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appHighlight]",
    exportAs: "customHighlight"
})
export class HighlightDirective implements OnInit{

    @HostBinding('style.backgroundColor') @Input('appHighlight') backgroundColor;
    @Input() color;
    @Input() alternativeColor;
    @Input() headColor;
    backupColor;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnInit() {
        this.el.nativeElement.style.color = this.color;
        //this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
        this.renderer.setElementClass(this.el.nativeElement, this.headColor, true);
    }

    @HostListener('mousedown')
    onMouseEnter() {
        this.backupColor = this.backgroundColor;
        this.backgroundColor = this.alternativeColor; 
    }

    @HostListener('mouseup')
    onMouseLeave() {
        this.backgroundColor = this.backupColor;
    }
}