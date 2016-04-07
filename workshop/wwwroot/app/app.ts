import {Component} from 'angular2/core';
import { ProjectEntry } from './projectEntry';
import { DataService } from './dataService';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    styleUrls: ['../app/app.css'],
    directives: [ProjectEntry],
    providers: [DataService]
})
export class App {

    projects: any[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getProjects()
        .subscribe((projects: any[]) => {
          this.projects = projects;
        });
    }

    saveHours() {
        alert('Saved!');
    }
}
