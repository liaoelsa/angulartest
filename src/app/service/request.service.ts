import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  //获取同步数据
  getData(){
    var userName = "elsa"
    return userName
  }

  //获取异步数据
  //回调函数
  getCallBackData(fn){
    setTimeout(() => {
      var callBackData = "call back data"
      fn(callBackData)
    }, 1000);
  }

  //promise
  getPromiseData(){
    return new Promise(resovle => {
      setTimeout(() => {
        resovle('promise data')
      }, 2000);
    })
    
  }

  // Rxjs
  getRxjsData(){
    return new Observable(observer => {
      setTimeout(() => {
        observer.next('rxjs data')
        // observer.error()
      }, 3000);
    })
  }

  //Rxjs Interval
  getIntervalRxjsData(){
    let num = 0
    return new Observable(observer => {
      setInterval(() => {
        num++
        observer.next(num)
        // observer.error()
      }, 1000);
    })
  }
}
