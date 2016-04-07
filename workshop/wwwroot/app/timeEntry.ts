import {Component, Input} from 'angular2/core';

@Component({
    selector: '[timeEntry]',
    templateUrl: '/app/timeEntry.html'
})
export class TimeEntry {
     @Input('timeEntry') hours;     
}