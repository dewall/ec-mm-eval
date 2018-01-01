import { Component, OnInit } from '@angular/core';

import * as L from "leaflet";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private baseMap: any;

    constructor() {
        this.baseMap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });
    }

    ngOnInit() {
        let map = L.map("map", {
            layers: [this.baseMap],
        }).setView([51.505, -0.09], 12)

        L.control.scale().addTo(map);
        L.control.zoom({ position: "topright" }).addTo(map);
    }
}