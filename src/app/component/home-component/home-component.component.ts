import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DlHostDirective } from 'src/app/dl-host.directive';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  public message:any="<h3>this is a html</h3>"
  public picUrl:string = 'https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png';
  private testArray: any
  @ViewChild(DlHostDirective,{ static: true }) dlHost: DlHostDirective;
  @ViewChild('appHeader', { static:true }) header:any


  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    if(this.dlHost){
      this.dlHost.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(TodolistComponent))
    }
  }

  buttonClick(){
    this.testArray = ["test"]
    console.log(this.testArray.length)
  }

  getHeaderMethod(){
    this.header.run()
  }

}
