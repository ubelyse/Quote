import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timecount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithTime:any = new Date(today.getHours(), today.getMinutes())
    var seconds = (Math.round((today.getTime() - value.getTime())/1000))
    var minutes = Math.round(seconds/60)
    var hours = Math.round(minutes/60)
    var TimeDifferenceSeconds = value.hours*60;
    var TimeCounter = TimeDifferenceSeconds/minutes;

    if (TimeCounter >= 1 && value > todayWithTime){
      return TimeCounter;
    }else{
      return 0;
    }
  }
}