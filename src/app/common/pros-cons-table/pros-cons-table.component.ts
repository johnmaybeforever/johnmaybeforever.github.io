import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pros-cons-table',
    templateUrl: './pros-cons-table.component.html',
    styleUrls: ['./pros-cons-table.component.css']
})
export class ProsConsTableComponent {
    @Input() pros!: string[]
    @Input() cons!: string[]
    constructor () {}
}