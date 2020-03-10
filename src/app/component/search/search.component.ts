import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private keyword:string
  private searchList: string[] = []

  constructor() { }

  ngOnInit() {
  }

  doSearch() {
    if(this.searchList.indexOf(this.keyword) == -1){
      this.searchList.push(this.keyword)
    }
    this.keyword = ''
  }

  onDelete(key){
    this.searchList.splice(key,1)
  }

}
