import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date= new Date();
    let hours = Math.abs((today.getTime() - value.getTime()) / 3600000) 

    return hours;
    
    
    /*let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.round(Math.abs(value - todayWithNoTime));
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = Math.round(dateDifferenceSeconds / secondsInDay);

    if (dateCounter >= 1 && value < todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }*/
  }
}