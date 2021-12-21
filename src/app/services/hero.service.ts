import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  API_URL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessagesService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`).pipe(
      tap(_ => this.log('Fecthed Heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.API_URL}/heroes/${id}`).pipe(
      tap(_ => this.log(`Fetched Hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHeroById id=${id}`))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(`${this.API_URL}/heroes/${hero.id}`, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Updated Hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    }
  }
}
