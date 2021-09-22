import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MarchandData } from '../../../model/marchand.model';
import { Observable, Subject } from 'rxjs';
import { catchError, filter, find, map, switchMap } from 'rxjs/operators';
import { DataSnapshot, SnapshotAction } from '@angular/fire/database/interfaces';
import { ProduitData, EtatProduitData, EtatProduitType } from '../../../model/produit.model';
import { State } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class MarchandSyntheseService {

  constructor(private database: AngularFireDatabase) { }
  valueFilter$ = new Subject<string>();
  MarchandProduitStateObs = this.valueFilter$.pipe(
    switchMap(valueFilter =>
      this.database.list('/items', ref => ref.orderByValue().equalTo(valueFilter)).snapshotChanges()
    )
  );

  updateMarchandProduitState(state: EtatProduitData) {
    const ref = this.database.list('produits_marchand', rf => rf.orderByValue().equalTo(state.idProduit));

    console.log("Synthese Data marchand: "+ JSON.stringify(ref));
    ref.snapshotChanges()
    .pipe(
      map((e:any)=>{
        const snapshots =  e.map((c:any)=> ({ key: c.payload.key, value: c.payload.val() }));
        console.log("Synthese Data marchand: "+ JSON.stringify(snapshots));
        ref.update(snapshots[0].key, state);
      })
    ).subscribe();
  }

  pushMarchandProduitsState(state: EtatProduitData) {
    const ref = this.database.list('produits_marchand');
    ref.push(state);
  }

}
