import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EnvirocarService {
    private baseUrl: string = "http://envirocar.org/api/stable";
    private httpClient: Http;

    constructor(httpClient: Http){
        this.httpClient = httpClient;
    }

    getTrack(trackid: string){
        return this.httpClient.get(this.baseUrl + "/tracks/" + trackid)
            .map(res => res.json())
            .map(result => {
                if (result.status !== "OK"){
                    throw new Error("unable to retrieve envirocar track");
                }
                // todo
                return result.results[0];
            });

    }
}