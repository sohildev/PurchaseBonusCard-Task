import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  API_URL: string = "https://run.mocky.io/v3";
  constructor(private http: HttpClient) { }
  getPurchaseBonus(): Observable<any> {
    return this.http.get(`${this.API_URL}/4c663239-03af-49b5-bcb3-0b0c41565bd2`);
  }
}