
import * as L from 'leaflet';

import './styles.scss';

window.onload = () => {
    console.log("onload");

    var map = L.map('map').setView([-37.77495501866911, 175.2847623825073], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    let featureCollection: GeoJSON.Feature<any> = {
        type: "Feature",
        properties: {},
        geometry: {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        175.2847623825073,
                        -37.77495501866911
                    ],
                    [
                        175.2933883666992,
                        -37.77298755890846
                    ],
                    [
                        175.29175758361816,
                        -37.779398571318765
                    ],
                    [
                        175.28845310211182,
                        -37.78075532805877
                    ],
                    [
                        175.2847623825073,
                        -37.77495501866911
                    ]
                ]
            ]
        }
    };
    
    var geoLayer = L.geoJSON(featureCollection);
} 