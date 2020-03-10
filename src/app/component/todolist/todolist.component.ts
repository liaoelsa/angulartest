import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  private todoList:any[] = []
  private keyword:string
  private KEY:string = 'todolist'

  constructor(public storageService:StorageService) {
   }

  ngOnInit() {
    console.log('refresh')
    let todolist = this.storageService.get(this.KEY)
    if(todolist){
      this.todoList = todolist
    }
  }

  doAdd(e){
    if(e.keyCode == 13){
      if(!this.todoListHasKeyword(this.keyword)){
        this.todoList.push({
          title:this.keyword,
          status:0
        })
        this.storageService.set(this.KEY,this.todoList)
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

  checkboxChanged(){
    this.storageService.set(this.KEY,this.todoList)
  }

}
