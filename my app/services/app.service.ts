import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "../card/employee";
import 'rxjs/add/operator/map';

export class AppService {
    
    constructor(@Inject(HttpClient) private http) {}

    getData(): Observable<Employee> {
        return this.http.get('assets/data/dummy.json')
        .map(result=>{
            return [result[0], result[1]]
        })
    }

    getPromiseData(): Promise<Employee> {
        return this.http.get('assets/data/dummy.json').toPromise();
    }
}