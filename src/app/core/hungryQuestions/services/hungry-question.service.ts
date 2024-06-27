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
  private apiUrl = environment.baseUrl + '/mobile/api/v1/UserQuestion/GetPagedList?userId=';
  private token_2 = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyMDQ5IiwidW5pcXVlX25hbWUiOiJhaG1lZC5oLmZyYWdAZ21haWwuY29tIiwibmJmIjoxNjk5MjgyNDUxLCJleHAiOjE3MzAzODI4NTEsImlhdCI6MTY5OTI4MjQ1MX0.3tY5fVeaILmEqO4na1DIyGPjBq7A4fJEv7tqW54ZkbjxP6OCGpc3cr3RXkxIkJVyyWMEcGk8xs9d8rBZfCN15g'



  constructor(private http: HttpClient) { }

  getUserQuestions(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'accept': '/',
      'Authorization': this.token_2
    });

    return this.http.get<any>(this.apiUrl + id, { headers });
  }

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
