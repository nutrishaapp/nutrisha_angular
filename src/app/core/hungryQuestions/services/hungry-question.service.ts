import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HungryQuestionService {

  private api_TummyMakingNoises = environment.baseUrl + '/Admin/api/v1/TummyMakingNoises/GetPagedList?userId=';
  private api_FeelingChewy = environment.baseUrl + '/Admin/api/v1/FeelingChewy/GetPagedList?userId=';
  private api_EmotionalCrave = environment.baseUrl + '/Admin/api/v1/EmotionalCrave/GetPagedList?userId=';
  private token = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxMyIsIklzQWRtaW4iOiJUcnVlIiwibmJmIjoxNzAyODcyMjYwLCJleHAiOjE3MzM5NzYyNjAsImlhdCI6MTcwMjg3MjI2MH0.n4Hu41QYV49ycwZWTtx7WRX9Pf0Qn2OiR44FrFA4-RsPZfsdsseXkspEhDaX16uYCaS_6rCeXs-cuAjaePekKQ'



  constructor(private http: HttpClient) { }

  getTummyMakingNoises(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_TummyMakingNoises + id, { headers });
  }

  getFeelingChewy(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_FeelingChewy + id, { headers });
  }

  getEmotionalCrave(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token
    });

    return this.http.get<any>(this.api_EmotionalCrave + id, { headers });
  }
}
