import { Component, Input } from 'angular2/core';

@Component({
    selector: '[projectEntry]',
    templateUrl: '/app/projectEntry.html'
})
export class ProjectEntry {
     @Input('projectEntry') project: any;
     sum = 0;

     ngOnInit() {
         this.updateSum();
     }

     updateSum() {
        let numeric = function(num: any): number {
            return isNaN(num) ? 0 : num;
        };
        this.sum = numeric(this.project.days.monday) + numeric(this.project.days.tuesday) +
            numeric(this.project.days.wednesday) + numeric(this.project.days.thursday) +
            numeric(this.project.days.friday);
     }
}
