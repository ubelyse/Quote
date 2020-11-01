import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithTime:any = new Date(today.getHours(), today.getMinutes())
    var TimeDifference = Math.abs(value - todayWithTime) //returns value in miliseconds
    const secondsInHour = 36000; //60 seconds * 60 minutes in an hour
    var TimeDifferenceSeconds = TimeDifference*2.77778e-7; //converts miliseconds to minutes
    var TimeCounter = TimeDifferenceSeconds/secondsInHour;

    if (TimeCounter >= 1 && value > todayWithTime){
      return TimeCounter;
    }else{
      return 0;
    }
  }
}