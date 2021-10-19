import { Component, OnInit } from '@angular/core';
import { AssosProjetsService } from '../../../service/association/assos-projets.service';
import { AuthService } from '../../../service/auth.service';
import { Assos, Projet, AssosProjets } from '../../../model/assos-projets.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demande-gestion-projetassos',
  templateUrl: './demande-gestion-projetassos.component.html',
  styleUrls: ['./demande-gestion-projetassos.component.scss']
})
export class DemandeGestionProjetassosComponent implements OnInit {

  constructor(private authService: AuthService, private projetService: AssosProjetsService) { }

  assos: Assos[] = [];
  projets: AssosProjets[] = [];
  selectCurrentAssos: Assos = <Assos>{};

  ngOnInit(): void {
    this.projetService.getAll(true).subscribe(prjs => {
      if(prjs.length !== 0){
        prjs.forEach(a =>{
          if(!this.assos.find(e => e.nom === a.nom)) {
            this.assos.push({idassos:a.idassos, nom:a.nom});
          }
          this.projets.push(a);
        });
        this.selectCurrentAssos = this.assos[0];
        console.log("Selected assos: "+ JSON.stringify(this.selectCurrentAssos));
      }
    });
  }

  applyFiltre(assos: Assos) {
    this.selectCurrentAssos = assos;
    console.log("Selected assos: "+ JSON.stringify(this.selectCurrentAssos));
  }

  validation(project: AssosProjets, valid:boolean) {
    const projectUpdate: Projet = {
        idproj: project.projet.idproj,
        statut: valid?"VALIDER":"REFUSER",
        refassos: project.projet.refassos,
        titre: project.projet.titre,
        description: project.projet.description,
        datecreate: project.projet.datecreate,
        argentcollect: project.projet.argentcollect
    };
    console.log(JSON.stringify(projectUpdate));
    this.projetService.updateEnAttente(projectUpdate);
  }

}
