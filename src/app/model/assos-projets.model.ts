

export interface Assos{
  idassos: string
  nom: string;
}

export interface AssosProjets {
  idassos: string
  nom: string;
  projet:Projet;
}

export interface Projet {
  idproj:string;
  refassos: string;
  titre:string;
  description:string;
  datecreate:Date;
  datevalid?:Date;
  statut:StatutProjet;
  //refusmsg:string;
  argentcollect:number;
}

export type StatutProjet = "EN_ATTENTE" | "VALIDER" | "REFUSER";
