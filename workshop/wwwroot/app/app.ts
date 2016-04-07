import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import { ProjectEntry } from './projectEntry';
import { TimeEntry } from './timeEntry';
import { DataService } from './dataService';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    styleUrls: ['../app/app.css'],
    directives: [ProjectEntry, TimeEntry],
    providers: [DataService]
})
export class App {

    projects: any[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProjects()
        .subscribe((projects:any[]) => {
          this.projects = projects;
        });
    }
}