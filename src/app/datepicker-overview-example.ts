import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
})
export class DatepickerOverviewExample {
  endDate: any;

  onStartChange(event: any) {
    console.log('change ', event.value);
    this.endDate = moment(event.value).endOf('month').toDate();
  }
}
