import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  //profil:string = 'CLIENT';

  profil:string = 'MARCHAND';

  constructor() {
  }

  ngOnInit(): void {
    
  }

//   onClickClient(){
//
//  }
//   onClickMarchand(){
//      this.profil = 'MARCHAND';
//   }

}
