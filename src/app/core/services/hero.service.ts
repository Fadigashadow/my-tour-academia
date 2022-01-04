import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
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

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.API_URL}/heroes`, hero, this.httpOptions).pipe(
      tap(newHero => this.log(
        `Hero Created w/ id=${newHero.id} & name=${newHero.name}`)),
      catchError(this.handleError<any>('createHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${this.API_URL}/heroes/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`Hero Deleted id=${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  getHeroesByName(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.API_URL}/heroes/?name=${term}`).pipe(
      tap(result => result.length ?
        this.log(`Found heroes matching term "${term}"`):
        this.log(`No heroes matching term "${term}"`)),
      catchError(this.handleError<Hero[]>('getHeroesByName', []))
    );
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.API_URL}/heroes/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]),
        tap(h => {
          const outcome = h ? `Fetched` : `Not found`;
          this.log(`${outcome} Hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
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
