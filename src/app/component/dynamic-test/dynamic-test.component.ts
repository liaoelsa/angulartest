import { Component, OnInit, ComponentRef, ComponentFactoryResolver, ElementRef, Injector, ApplicationRef } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-dynamic-test',
  templateUrl: './dynamic-test.component.html',
  styleUrls: ['./dynamic-test.component.scss']
})
export class DynamicTestComponent implements OnInit {
  component:ComponentRef<TodolistComponent>

  constructor(private componentFactoryResolver:ComponentFactoryResolver,
    private elementRef:ElementRef,
    private injector:Injector,
    private applicationRef:ApplicationRef) {
      this.component = this.componentFactoryResolver.resolveComponentFactory(TodolistComponent).create(this.injector)
      this.applicationRef.attachView(this.component.hostView)
     }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let host = document.createElement('div')
    host.appendChild((this.component.hostView as any).rootNodes[0])
    this.elementRef.nativeElement.appendChild(host)
  }

  ngOnDestroy() {
    this.applicationRef.detachView(this.component.hostView)
    this.component.destroy()
  }

}
