import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import { FILES_LIST } from './files-list';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  authenticated = false;

  private s3MapsListUrl = 'http://localhost:8080/s3-maps-list';
  private s3MapsImageUrl = 'http://localhost:8080/s3-map-image-file';

  image_files = FILES_LIST;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getFilesList(): Observable<string[]> {

    //return this.image_files;
    return this.http.get<string[]>(this.s3MapsListUrl).pipe(
      catchError(this.handleError<string[]>('getFilesList', []))
    )
  }

  getMapImage(fname: string): Observable<Blob> { 
    let queryParams = new HttpParams();
    queryParams = queryParams.append("fname", fname);

    //return this.http.get<Blob>(this.s3MapsImageUrl, {params: queryParams}).pipe(
      //catchError(this.handleError<string[]>('getMapImage', []))

    var fullUrl = this.s3MapsImageUrl +"?fname=" +fname;
      
      //var urlCreator = window.URL;
      //return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));

    return this.http.get(fullUrl,  {responseType: 'blob'});
  }
  
  authenticate(credentials: { username: any; password: any; }, callback: { (): void; (): any; }) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });

}

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
