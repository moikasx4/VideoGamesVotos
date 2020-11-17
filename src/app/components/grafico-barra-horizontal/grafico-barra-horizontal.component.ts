import { Component, OnInit, OnDestroy, Input } from '@angular/core';



@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  /* results: any[] = [
 {
    "name": "Juego 1",
    "value": 20
  },
  {
    "name": "Juego 2",
    "value": 50
  },
  {
    "name": "Juego 3",
    "value": 35
  },
  {
    "name": "Juego 4",
    "value": 12
  ];
}*/

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Botos';
  colorScheme = 'nightLights';

 // intervalo;

  constructor(){

   /* console.log(Math.round(Math.random() * 500));

    this.intervalo = setInterval(() =>{
      const newResults = [...this.results]
      for( let i in newResults )
      {
           newResults[i].value = Math.round(Math.random() * 500);
           console.log(this.results[i].value);
      }
      this.results = [...newResults];
    }, 1500);*/
   }

  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy(){
    //clearInterval(this.intervalo);
  }

}
