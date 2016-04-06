import {Component, Input} from 'angular2/core';


@Component({
    selector: '[projectEntry]',
    templateUrl: '/app/projectEntry.html'
})
export class ProjectEntry {
     @Input('projectEntry') name;
     sum = 0;
}