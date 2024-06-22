import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HungryQuestionService {

  private api_TummyMakingNoises = 'https://dev.api.nutrisha.app/Admin/api/v1/TummyMakingNoises/GetPagedList?userId=6116';
  private api_FeelingChewy = 'https://dev.api.nutrisha.app/Admin/api/v1/FeelingChewy/GetPagedList?userId=6116';
  private api_EmotionalCrave = 'https://dev.api.nutrisha.app/Admin/api/v1/EmotionalCrave/GetPagedList?userId=6116';
  private token = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNzAyODcyMjYwLCJleHAiOjE3MzM5NzYyNjAsImlhdCI6MTcwMjg3MjI2MH0.n4Hu41QYV49ycwZWTtx7WRX9Pf0Qn2OiR44FrFA4-RsPZfsdsseXkspEhDaX16uYCaS_6rCeXs-cuAjaePekKQ'



  constructor(private http: HttpClient) { }

  getTummyMakingNoises(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_TummyMakingNoises, { headers });
  }

  getFeelingChewy(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_FeelingChewy, { headers });
  }

  getEmotionalCrave(): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_EmotionalCrave, { headers });
  }
}
