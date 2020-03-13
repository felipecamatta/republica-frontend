import { Injectable } from '@angular/core';
import { DataChart } from '../models/data-chart';
import { HttpClient } from '@angular/common/http';
import { Republica } from '../models/republica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chartUrl: string;

  constructor(private http: HttpClient) {
    this.chartUrl = 'https://republica-backend.herokuapp.com/chart';
  }

  public getChartData(republica: Republica, mes: number, ano: number): Observable<DataChart> {
    return this.http.get<DataChart>(`${this.chartUrl}/${republica.id}/${mes}/${ano}`);
  }
}
