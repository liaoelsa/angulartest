import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-request-test',
  templateUrl: './request-test.component.html',
  styleUrls: ['./request-test.component.scss']
})
export class RequestTestComponent implements OnInit {

  constructor(public requestService: RequestService) { }

  ngOnInit() {
    //获取同步数据
    let data = this.requestService.getData()
    console.log(data)

    //获取异步数据
    //call back
    let callBackData = this.requestService.getCallBackData((data) => {
      console.log(data)
    })

    //promise
    let promise = this.requestService.getPromiseData()
    promise.then((data) => {
      console.log(data)
    })

    //rxjs
    // let oberver = this.requestService.getRxjsData()
    // oberver.subscribe((data) => {
    //   console.log(data)
    // })

    //rxjs unSubscribe
    let disposable = this.requestService.getRxjsData().subscribe((data) => {
      console.log(data)
    })
    setTimeout(() => {
      disposable.unsubscribe()
    }, 1000);

    //interval rxjs
    this.requestService.getIntervalRxjsData().subscribe((data) => {
      console.log(data)
    })

    //map,filter
    let steam = this.requestService.getIntervalRxjsData()
    steam.pipe(
      filter((num:any) => {
        if(num%2){
          return true
        }
      }),
      map(value => {
        return value * value
      })
    ).subscribe((data) => {
      console.log("map ,  filter :" + data)
    })

  }


}
