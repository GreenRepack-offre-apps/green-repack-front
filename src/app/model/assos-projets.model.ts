

interface Assos{
  idassos: string
  nom: string;
}

interface AssosProjets {
  idassos: string
  nom: string;
  projets:Projet[];
}

interface Projet{
  idproj:string;
  refassos: string;
  titre:string;
  description:string;
  datecreate:Date;
  datevalid:Date;
  statut:string;
  //refusmsg:string;
  argentcollect:number;
}
