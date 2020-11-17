import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getNominados()
                    .subscribe(respJuegos => {
                    console.log(respJuegos);
                    this.juegos = respJuegos;
                                       });
  }

   votarJuego(juego: Game){
    console.log(juego);
    this.gameService.votarJuego(juego.id)
                    .subscribe(
                               (resp: any)  => {
                                console.log(resp);
                                if(resp.ok){
                                  Swal.fire('Gracias', resp.mensaje, 'success');
                                }else{
                                  Swal.fire('Ups', resp.mesaje, 'error');
                                }
                               });
  }
}
