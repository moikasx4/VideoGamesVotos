import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interface';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];
  constructor( private http: HttpClient) { }

  getNominados(){
     if (this.juegos.length !== 0){
       console.log('Desde Cache');
       return of(this.juegos);
    }else{
      console.log('Desde Internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
                      .pipe(
                        tap(
                        juegos => this.juegos = juegos
                      ));
     }
  }

  votarJuego(id: string){
    return this.http.post<Game[]>(`${ environment.url }/api/goty/${id}`, { })
                                  .pipe(
                                    catchError( err =>{
                                      console.log(err);
                                      return of(err.error);
                                    })
                                  );

  }
}
