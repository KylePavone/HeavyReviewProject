import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiPrefix: string = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  get(url: string, params: any = null) {
    url = this.apiPrefix + url

    if (params) {
      const firstParamKey = Object.keys(params)[0];
      const firstParamValue = Object.values(params)[0]
      let copyParams = Object.assign({}, params)

      url += '?' + firstParamKey + '=' + firstParamValue
      delete copyParams[firstParamKey]
      if (Object.keys(params).length > 1) {        
        for (let [key, value] of Object.entries(copyParams)) {
          url += '&' + key + '=' + value
        }        
      }
    }

    return new Observable<any>((observer: any) => {
      this.http.get(url).subscribe((data: any) => {
        observer.next(data);
        observer.complete()
      },
      (error: any) => {
          console.error(error.status);
      })
    })
  }

  post(url: string, body: any) {
    url = this.apiPrefix + url
    return new Observable<any>((observer) => {
      this.http.post(url, body).subscribe((data: any) => {
        observer.next(data);
        observer.complete()
      },
      (error) => {
        console.log(error.status);
      })
    })
  }

}
