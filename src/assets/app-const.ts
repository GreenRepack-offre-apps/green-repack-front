import { environment } from "src/environments/environment";

export const APP_URL = 'http://localhost:3000'
export const API_URL = environment.url_backend + '/api'

// marchand endpoint
export const MARCHAND_INSCRIPTION_ENDPOINT = API_URL + '/marchand/create';
export const MARCHAND_RECHERCHE_ENDPOINT = API_URL + '/marchand/get';

export const PRODUIT_AJOUT_ENDPOINT = API_URL + '/produit/add';
export const PRODUIT_MISAJOURS_ENDPOINT = API_URL + '/produit/update';
export const PRODUIT_LIST_RECHERCHE_ENDPOINT = API_URL + '/produit/user/list';

export const PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT = API_URL + '/produit/list';
export const PRODUIT_GET_RECHERCHE_ENDPOINT = API_URL + '/produit/get';

