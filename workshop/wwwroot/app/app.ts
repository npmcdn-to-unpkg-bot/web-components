import {Component} from 'angular2/core';
import { ProjectEntry } from './projectEntry';


@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html',
    styleUrls: ['../app/app.css'],
    directives: [ProjectEntry]
})
export class App {
    
}