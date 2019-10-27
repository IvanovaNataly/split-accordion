import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-accordion',
      templateUrl: './accordion.component.html',
      styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

    public list = [
        'item 1',
        'item 2',
        'item 3',
    ];

    public areas = {};

    constructor() {}

    ngOnInit() {
    }

    toggleGroup(index: number) {
        const listId = 'list' + index;
        const areaId = 'area' + index;
        const list = document.getElementById(listId);
        const area = document.getElementById(areaId);
        if (list.classList.contains('collapsed')) {
            list.classList.remove('collapsed');
            area.setAttribute('style', this.areas[areaId]);
        } else {
            list.classList.add('collapsed');
            this.areas[areaId] = area.getAttribute('style');
            area.setAttribute('style', 'order: 0; flex: 0 0 30px;');
            console.log(this.areas[areaId]);
        }
    }

}
