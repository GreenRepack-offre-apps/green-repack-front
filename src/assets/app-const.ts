import { environment } from "src/environments/environment";

export const APP_URL = 'http://localhost:3000'
export const API_URL = environment.url_backend + '/api'

// marchand endpoint
export const MARCHAND_INSCRIPTION_ENDPOINT = API_URL + '/marchand/create';
export const MARCHAND_RECHERCHE_ENDPOINT = API_URL + '/marchand/get';
export const MARCHAND_UPDATE_ENDPOINT = API_URL + '/marchand/update';

export const PRODUIT_AJOUT_ENDPOINT = API_URL + '/produit/add';
export const PRODUIT_MISAJOURS_ENDPOINT = API_URL + '/produit/update';
export const PRODUIT_LIST_RECHERCHE_ENDPOINT = API_URL + '/produit/user/list';

export const PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT = API_URL + '/produit/list';
export const PRODUIT_GET_RECHERCHE_ENDPOINT = API_URL + '/produit/get';

//client
export const CLIENT_CREATE = API_URL + '/client/add';
export const CLIENT_GET = API_URL + '/client/get';

// assos & projet endpoint
export const ASSOS_$_PROJECTS_GET_ALL =  API_URL + '/association/projets/all';
export const UPDATE_PROJECT_EN_ATTENTE =  API_URL + '/association/projets/update/waiting';
export const UPDATE_PROJECT_VALIDER =  API_URL + '/association/projets/update/verified'

// paiement
export const PAIEMENT_INIT = environment.url_backend + '/paiement/init';



