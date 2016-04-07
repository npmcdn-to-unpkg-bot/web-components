import {Component, Input} from 'angular2/core';
import { TimeEntry } from './timeEntry';

@Component({
    selector: '[projectEntry]',
    templateUrl: '/app/projectEntry.html',
    directives: [TimeEntry]
})
export class ProjectEntry {
     @Input('projectEntry') project;
     
     project = this.project;     
     sum = 0;
}