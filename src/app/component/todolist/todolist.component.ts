import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  private todoList:any[] = []
  private keyword:string

  constructor() { }

  ngOnInit() {
  }

  doAdd(e){
    if(e.keyCode == 13){
      if(!this.todoListHasKeyword(this.keyword)){
        this.todoList.push({
          title:this.keyword,
          status:0
        })
      }else{
        alert("key word existing:" + this.keyword)
      }
      
      this.keyword = ''
    }
    
  }

  todoListHasKeyword(keyword:string){
    if(!keyword){
      return false
    }
    for(var i=0; i < this.todoList.length; i++){
      if(this.todoList[i].title == keyword){
        return true
      }
    }
    return false
  }

  onDelete(key){
    this.todoList.splice(key,1)
  }

}
