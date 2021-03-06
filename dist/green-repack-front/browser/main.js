(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+KB1":
/*!*************************************************!*\
  !*** ./src/app/lib/material/material.module.ts ***!
  \*************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["????defineInjector"]({ providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { floatLabel: 'auto' } }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"]
        ], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["????setNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"]], exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"]] }); })();


/***/ }),

/***/ "+iHr":
/*!*****************************************!*\
  !*** ./src/app/model/marchand.model.ts ***!
  \*****************************************/
/*! exports provided: Marchand, MarchandViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marchand", function() { return Marchand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarchandViewModel", function() { return MarchandViewModel; });
class Marchand {
    constructor() {
        this.nom = "";
        this.email = "";
        this.adresse = "";
    }
}
class MarchandViewModel {
    constructor() {
        this.adresseModel = {};
    }
    createMarchand() {
        let adr = '';
        adr += (this.adresseModel.complement !== '' ? this.adresseModel.complement + ', ' : '') + this.adresseModel.voie + ', '
            + this.adresseModel.codePostal + ' ' + this.adresseModel.ville;
        return { nom: this.nom, email: this.email, password: this.password, adresse: adr, client: this.client };
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\uriel\5al1\pa2-green-repack\green-repack-front\src\main.ts */"zUnb");


/***/ }),

/***/ "09dN":
/*!*********************************!*\
  !*** ./src/assets/app-const.ts ***!
  \*********************************/
/*! exports provided: APP_URL, API_URL, MARCHAND_INSCRIPTION_ENDPOINT, MARCHAND_RECHERCHE_ENDPOINT, MARCHAND_UPDATE_ENDPOINT, PRODUIT_AJOUT_ENDPOINT, PRODUIT_MISAJOURS_ENDPOINT, PRODUIT_LIST_RECHERCHE_ENDPOINT, PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT, PRODUIT_GET_RECHERCHE_ENDPOINT, CLIENT_CREATE, CLIENT_GET, ASSOS_$_PROJECTS_GET_ALL, UPDATE_PROJECT_EN_ATTENTE, UPDATE_PROJECT_VALIDER, PAIEMENT_INIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_URL", function() { return APP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARCHAND_INSCRIPTION_ENDPOINT", function() { return MARCHAND_INSCRIPTION_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARCHAND_RECHERCHE_ENDPOINT", function() { return MARCHAND_RECHERCHE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARCHAND_UPDATE_ENDPOINT", function() { return MARCHAND_UPDATE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUIT_AJOUT_ENDPOINT", function() { return PRODUIT_AJOUT_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUIT_MISAJOURS_ENDPOINT", function() { return PRODUIT_MISAJOURS_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUIT_LIST_RECHERCHE_ENDPOINT", function() { return PRODUIT_LIST_RECHERCHE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT", function() { return PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUIT_GET_RECHERCHE_ENDPOINT", function() { return PRODUIT_GET_RECHERCHE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_CREATE", function() { return CLIENT_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_GET", function() { return CLIENT_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASSOS_$_PROJECTS_GET_ALL", function() { return ASSOS_$_PROJECTS_GET_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROJECT_EN_ATTENTE", function() { return UPDATE_PROJECT_EN_ATTENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROJECT_VALIDER", function() { return UPDATE_PROJECT_VALIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAIEMENT_INIT", function() { return PAIEMENT_INIT; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const APP_URL = 'http://localhost:3000';
const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_backend + '/api';
// marchand endpoint
const MARCHAND_INSCRIPTION_ENDPOINT = API_URL + '/marchand/create';
const MARCHAND_RECHERCHE_ENDPOINT = API_URL + '/marchand/get';
const MARCHAND_UPDATE_ENDPOINT = API_URL + '/marchand/update';
const PRODUIT_AJOUT_ENDPOINT = API_URL + '/produit/add';
const PRODUIT_MISAJOURS_ENDPOINT = API_URL + '/produit/update';
const PRODUIT_LIST_RECHERCHE_ENDPOINT = API_URL + '/produit/user/list';
const PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT = API_URL + '/produit/list';
const PRODUIT_GET_RECHERCHE_ENDPOINT = API_URL + '/produit/get';
//client
const CLIENT_CREATE = API_URL + '/client/add';
const CLIENT_GET = API_URL + '/client/get';
// assos & projet endpoint
const ASSOS_$_PROJECTS_GET_ALL = API_URL + '/association/projets/all';
const UPDATE_PROJECT_EN_ATTENTE = API_URL + '/association/projets/update/waiting';
const UPDATE_PROJECT_VALIDER = API_URL + '/association/projets/update/verified';
// paiement
const PAIEMENT_INIT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].url_backend + '/paiement/init';


/***/ }),

/***/ "3R/R":
/*!**************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/customer-home.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerHomeComponent", function() { return CustomerHomeComponent; });
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/auth.model */ "nNHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _client_home_client_home_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/home-client/home-client.component */ "w9/1");
/* harmony import */ var _marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marchand/home-marchand/home-marchand.component */ "Dgc0");







function CustomerHomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-home-client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function CustomerHomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-home-marchand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function CustomerHomeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " Erreur!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "revenir \u00E0 la page d'acceuil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class CustomerHomeComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.home_page_owner = '';
        this.session = false;
        if (sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'client') {
            this.home_page_owner = 'client';
        }
        else if (sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
            this.home_page_owner = 'marchand';
        }
    }
    ngOnInit() {
        if (this.home_page_owner !== '') {
            if (this.home_page_owner === 'client') {
            }
        }
        else if (sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
            this.home_page_owner = 'marchand';
            this.authService.currentUser(new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]()).subscribe(rst => {
                this.home_page_owner = 'marchand';
                if (rst && rst.uid && rst.email) {
                    this.home_page_owner = 'marchand';
                    this.session = true;
                }
            });
        }
        else {
            this.router.navigate(['connexion']);
        }
    }
}
CustomerHomeComponent.??fac = function CustomerHomeComponent_Factory(t) { return new (t || CustomerHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CustomerHomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: CustomerHomeComponent, selectors: [["app-customer-home"]], decls: 5, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["empty", ""], ["href", "/connexion"]], template: function CustomerHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, CustomerHomeComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, CustomerHomeComponent_div_2_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, CustomerHomeComponent_ng_template_3_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.home_page_owner === "client" && ctx.session === true)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.home_page_owner === "marchand" && ctx.session === true)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _client_home_client_home_client_component__WEBPACK_IMPORTED_MODULE_5__["HomeClientComponent"], _marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_6__["HomeMarchandComponent"]], styles: [""] });


/***/ }),

/***/ "5n6B":
/*!************************************************************************!*\
  !*** ./src/app/service/marchand/synthese/marchand-synthese.service.ts ***!
  \************************************************************************/
/*! exports provided: MarchandSyntheseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarchandSyntheseService", function() { return MarchandSyntheseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");




class MarchandSyntheseService {
    constructor(database) {
        this.database = database;
        this.valueFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.MarchandProduitStateObs = this.valueFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(valueFilter => this.database.list('/items', ref => ref.orderByValue().equalTo(valueFilter)).snapshotChanges()));
    }
    updateMarchandProduitState(state) {
        const ref = this.database.list('produits_marchand', rf => rf.orderByValue().equalTo(state.idProduit));
        console.log("Synthese Data marchand: " + JSON.stringify(ref));
        ref.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((e) => {
            const snapshots = e.map((c) => ({ key: c.payload.key, value: c.payload.val() }));
            console.log("Synthese Data marchand: " + JSON.stringify(snapshots));
            ref.update(snapshots[0].key, state);
        })).subscribe();
    }
    pushMarchandProduitsState(state) {
        const ref = this.database.list('produits_marchand');
        ref.push(state);
    }
}
MarchandSyntheseService.??fac = function MarchandSyntheseService_Factory(t) { return new (t || MarchandSyntheseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"])); };
MarchandSyntheseService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: MarchandSyntheseService, factory: MarchandSyntheseService.??fac, providedIn: 'root' });


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/auth.model */ "nNHX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(firebaseAuth, router) {
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.isLoad = true;
        this.isFetch = false;
        const sessionProfil = sessionStorage.getItem('PROFIL');
        if (sessionProfil === new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]().type.toLowerCase()) {
            this.profilRegister = new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]();
        }
        else if (sessionProfil === new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["ClientProfils"]().type.toLowerCase()) {
            this.profilRegister = new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["ClientProfils"]();
        }
        else if (sessionProfil === new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["AdminProfils"]().type.toLowerCase()) {
            this.profilRegister = new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["AdminProfils"]();
        }
        else {
            this.profilRegister = null;
        }
    }
    currentUser(profils) {
        let token = null;
        this.firebaseAuth.idToken.subscribe(t => token = t);
        return this.firebaseAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(s => {
            console.log("current user & auth state " + JSON.stringify(s));
            this.isFetch = token !== null && (s === null || s === void 0 ? void 0 : s.email) !== null;
            const current_user = { profil: profils.type, sessionActive: false, email: s === null || s === void 0 ? void 0 : s.email, token: token, uid: s === null || s === void 0 ? void 0 : s.uid };
            console.log("current user is " + JSON.stringify(current_user));
            return current_user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
    }
    forceLogout(redirect_url = null) {
        let token = null;
        this.firebaseAuth.authState.subscribe(auth => {
            if (auth !== null) {
                this.firebaseAuth.signOut().then(r => {
                    sessionStorage.clear();
                    this.router.navigateByUrl(redirect_url !== null ? redirect_url : 'connexion');
                })
                    .catch(err => console.log('error; Can\'t logout '));
            }
        });
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ "ANdH":
/*!****************************************************!*\
  !*** ./src/app/service/paiment/paiment.service.ts ***!
  \****************************************************/
/*! exports provided: PaimentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaimentService", function() { return PaimentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/app-const */ "09dN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PaimentService {
    constructor(http) {
        this.http = http;
    }
    paybox(user, type) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        if (type === 'MARCHAND') {
            params = params.append('marchand', user);
        }
        else if (type === 'CLIENT') {
            params = params.append('client', user);
        }
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_1__["PAIEMENT_INIT"], { params: params });
    }
}
PaimentService.??fac = function PaimentService_Factory(t) { return new (t || PaimentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PaimentService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: PaimentService, factory: PaimentService.??fac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    //url_backend: "http://localhost:5000",
    url_backend: "https://green-repack.herokuapp.com",
    firebaseConfig: {
        apiKey: "AIzaSyB9HiPcWV1NFEJG1d7hFUz-aJ6egMibNwk",
        authDomain: "green-repack-c4328.firebaseapp.com",
        databaseURL: "https://green-repack-c4328-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "green-repack-c4328",
        storageBucket: "green-repack-c4328.appspot.com",
        messagingSenderId: "848770591222",
        appId: "1:848770591222:web:1ec5e8b42a5e6ca4beffd7",
        measurementId: "G-BGFRLEFKTK"
    },
    onesignal_appId: "42ac6aa8-edc3-43dc-b1da-15670bdcd490",
    //onesignal_appId: "50655600-2a1d-4f7e-9c0d-19667fd49ec0", //localhost
    admin_mail: "green-repack@",
    admin_remboursement_static_link: "https://buy.stripe.com/test_6oE7vogCl76J8H66oo"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CjmX":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/marchand/components/suivi-demande-list/suivi-demande-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SuiviDemandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuiviDemandeListComponent", function() { return SuiviDemandeListComponent; });
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../model/auth.model */ "nNHX");
/* harmony import */ var _model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../model/workflow-produit.model */ "uzoF");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../service/produit/produit-marchand.service */ "Lt4j");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../service/auth.service */ "6uu6");
/* harmony import */ var _service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../service/marchand/synthese/marchand-synthese.service */ "5n6B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function SuiviDemandeListComponent_div_3_div_1_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Le prix de reprise propos\u00E9 pour votre produit est de ", produitRecap_r4.recap.prix, " euros. Faite votre choix:");
} }
function SuiviDemandeListComponent_div_3_div_1_div_25_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Nouvelle offre de reprise pour votre produit \u00E0 ", produitRecap_r4.recap.prix, " euros. Faite votre choix:");
} }
function SuiviDemandeListComponent_div_3_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SuiviDemandeListComponent_div_3_div_1_div_25_div_1_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SuiviDemandeListComponent_div_3_div_1_div_25_ng_template_2_Template, 2, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-radio-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-radio-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SuiviDemandeListComponent_div_3_div_1_div_25_Template_mat_radio_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r14.reponseOffre(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Accepter l'offre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SuiviDemandeListComponent_div_3_div_1_div_25_Template_mat_radio_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r16.reponseOffre(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Refuser l'offre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SuiviDemandeListComponent_div_3_div_1_div_25_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r17.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](3);
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", produitRecap_r4.recap.ex_state === "INIT")("ngIfElse", _r10);
} }
function SuiviDemandeListComponent_div_3_div_1_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Il reste ", produitRecap_r4.recap.delais, " jour(s) pour la r\u00E9ception du produit !! ");
} }
function SuiviDemandeListComponent_div_3_div_1_div_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Le produit n'a pas \u00E9t\u00E9 receptionn\u00E9 !! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SuiviDemandeListComponent_div_3_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SuiviDemandeListComponent_div_3_div_1_div_26_div_1_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SuiviDemandeListComponent_div_3_div_1_div_26_ng_template_2_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](3);
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", produitRecap_r4.recap.delais && produitRecap_r4.recap.delais > 0)("ngIfElse", _r21);
} }
function SuiviDemandeListComponent_div_3_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SuiviDemandeListComponent_div_3_div_1_div_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r27); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r25.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Remboursement Green Repack pour r\u00E9cup\u00E9rer votre produit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SuiviDemandeListComponent_div_3_div_1_div_27_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r27); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r28.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Procedez au remboursement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SuiviDemandeListComponent_div_3_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Aucune action n'est requise !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SuiviDemandeListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "p-accordionTab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "categorie :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "caracteristique technique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "caracteristique esth\u00E9tique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "p-accordionTab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, SuiviDemandeListComponent_div_3_div_1_div_25_Template, 13, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, SuiviDemandeListComponent_div_3_div_1_div_26_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, SuiviDemandeListComponent_div_3_div_1_div_27_Template, 7, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, SuiviDemandeListComponent_div_3_div_1_div_28_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-card-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", produitRecap_r4.recap.marque, " - ", produitRecap_r4.recap.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Etat: ", produitRecap_r4.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", produitRecap_r4.recap.categorie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", produitRecap_r4.recap.info_tech, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", produitRecap_r4.recap.info_esth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", produitRecap_r4.recap.statut_validation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "EN_ATTENTE_REPONSE_");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "EN_ATTENTE_RECEPTION_PRODUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "ANNULATION_EN_ATTENTE_REMBOURSEMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" Ajouter le ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](31, 12, produitRecap_r4.recap.date_ajout, "yyyy/MM/dd - HH:mm"), " ");
} }
function SuiviDemandeListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SuiviDemandeListComponent_div_3_div_1_Template, 32, 15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r0.produitRecaps);
} }
function SuiviDemandeListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Vous n'avez pas de produit en cours de demande !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
class SuiviDemandeListComponent {
    constructor(produitService, authService, marchandSyntheseService) {
        this.produitService = produitService;
        this.authService = authService;
        this.marchandSyntheseService = marchandSyntheseService;
        this.title_suivi_demande = 'Suivi de demande de produits';
        this.produitRecaps = [];
        this.validationReponse = false;
    }
    ngOnInit() {
        this.authService.currentUser(new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]()).subscribe(user => {
            if (this.authService.isFetch) {
                this.produitService.fetchMarchandProducts(user.email, null).subscribe(rst => {
                    if (rst.status === 'SUCCES' && rst.data.length > 0) {
                        rst.data.forEach(d => {
                            this.produitRecaps.push({ recap: d, label: Object(_model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_1__["get_etat"])(d.statut_validation).label });
                        });
                    }
                });
            }
        });
    }
    // evaluate = (produitRecap: ProduitResume) => {
    //   return produitRecap?.nbJourRestant >= 0;
    // }
    validate(recap) {
        switch (recap.statut_validation) {
            case 'EN_ATTENTE_REPONSE_': //passage manuelle si non automatique
                let next_state = '';
                if (this.validationReponse === true) {
                    next_state = recap.ex_state === 'INIT' ? 'DEMANDE_GENERATION_COLIS' : 'VALIDATION_EN_ATTENTE_PAIEMENT';
                }
                else {
                    next_state = recap.ex_state === 'INIT' ? 'ANNULATION' : 'ANNULATION_EN_ATTENTE_REMBOURSEMENT';
                }
                this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation, etat_dem_next: next_state });
                break;
            case 'ANNULATION_EN_ATTENTE_REMBOURSEMENT':
                window.location.href = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].admin_remboursement_static_link;
            // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation, etat_dem_next: 'VALIDATION'});
            // break;
        }
    }
    reponseOffre(reponse) {
        this.validationReponse = reponse;
        console.log("offre rep " + this.validationReponse);
    }
}
SuiviDemandeListComponent.??fac = function SuiviDemandeListComponent_Factory(t) { return new (t || SuiviDemandeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_4__["ProduitMarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_6__["MarchandSyntheseService"])); };
SuiviDemandeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SuiviDemandeListComponent, selectors: [["app-suivi-demande-list"]], decls: 6, vars: 3, consts: [[1, "suivi-block"], [4, "ngIf", "ngIfElse"], ["emptyProducts", ""], ["class", "row produit", 4, "ngFor", "ngForOf"], [1, "row", "produit"], [2, "background-color", "yellow"], ["header", "Recapitulatif du produit"], [1, "accordion-body"], ["header", "Action requise", 3, "selected"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "footer"], ["otherMsg", ""], ["aria-labelledby", "radio-group-label", 1, "radio-group"], ["value", "oui", 1, "props", 3, "click"], ["value", "non", 1, "props", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"], ["expireMsg", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function SuiviDemandeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SuiviDemandeListComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SuiviDemandeListComponent_ng_template_4_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.title_suivi_demande);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.produitRecaps && ctx.produitRecaps.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["Accordion"], primeng_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardFooter"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".suivi-block[_ngcontent-%COMP%] {\n  background-color: #19d228;\n}\n\n.footer[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  margin-left: 2%;\n}\n\n.produit[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 3%;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-left: 20%;\n}\n\n[_nghost-%COMP%]     div.p-accordion {\n  background-color: beige;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-accordion-header {\n  background-color: antiquewhite;\n  margin: 8px 8px 8px 8px;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-accordion-header a.p-accordion-header-link {\n  color: black;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-accordion-header a.p-accordion-header-link span.p-accordion-header-text {\n  margin: 1% 1% 1% 1%;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-toggleable-content {\n  margin: 0% 3% 1% 3%;\n}\n\n.props[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });


/***/ }),

/***/ "DEn9":
/*!**************************************************************!*\
  !*** ./src/app/service/association/assos-projets.service.ts ***!
  \**************************************************************/
/*! exports provided: AssosProjetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssosProjetsService", function() { return AssosProjetsService; });
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/app-const */ "09dN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AssosProjetsService {
    constructor(http) {
        this.http = http;
    }
    getAll(withEnAttente) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('withattente', withEnAttente ? '1' : '0');
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["ASSOS_$_PROJECTS_GET_ALL"], { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(rst => {
            console.log("API ASSOS_$_PROJECTS_GET_ALL <= " + JSON.stringify(rst));
            return rst.status === 'ECHEC' || rst.data.length === 0 ? [] : rst.data;
        }));
    }
    updateEnAttente(body) {
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROJECT_EN_ATTENTE"], body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(rst => {
            console.log("API UPDATE_PROJECT_EN_ATTENTE <= " + JSON.stringify(rst));
            return rst;
        })
        //((err) => console.log("API UPDATE_PROJECT_EN_ATTENTE <= " + JSON.stringify(err)) )
        ).subscribe();
    }
    updateValider(body) {
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROJECT_VALIDER"], body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(rst => {
            console.log("API UPDATE_PROJECT_VALIDER <= " + JSON.stringify(rst));
            return rst;
        }));
    }
}
AssosProjetsService.??fac = function AssosProjetsService_Factory(t) { return new (t || AssosProjetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AssosProjetsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: AssosProjetsService, factory: AssosProjetsService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Dgc0":
/*!*************************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/marchand/home-marchand/home-marchand.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: HomeMarchandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMarchandComponent", function() { return HomeMarchandComponent; });
/* harmony import */ var _components_ajout_produit_ajout_produit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ajout-produit/ajout-produit.component */ "Q7iX");
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/auth.model */ "nNHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../service/marchand/marchand.service */ "OI+E");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../service/marchand/synthese/marchand-synthese.service */ "5n6B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_suivi_demande_list_suivi_demande_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/suivi-demande-list/suivi-demande-list.component */ "CjmX");













function HomeMarchandComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Espace Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HomeMarchandComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r2.activateClient(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Activer votre espace Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class HomeMarchandComponent {
    constructor(fbuilder, marchandService, firebaseAuth, authService, router, dialog, syntheseMarchand) {
        this.fbuilder = fbuilder;
        this.marchandService = marchandService;
        this.firebaseAuth = firebaseAuth;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.syntheseMarchand = syntheseMarchand;
        this.subs = [];
        this.profil = 'CLIENT';
        this.customer = {};
        this.title = 'Gerez vos produits ?? reconditioner! Acheter nos produit ici !!';
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    ngOnInit() {
        this.authService.currentUser(new _model_auth_model__WEBPACK_IMPORTED_MODULE_1__["MarchandProfils"]()).subscribe(usr => {
            if (usr && usr.email) {
                this.marchandService.searchMarchand('email', usr.email).subscribe(m => this.customer = m.value);
            }
        });
    }
    redirect() {
        this.firebaseAuth.signOut()
            .then(e => {
            this.router.navigate(['connexion']);
            sessionStorage.setItem('PROFIL', '');
        })
            .catch(err => console.log('error; Can\'t logout '));
    }
    openPopinAjoutProduit() {
        const dialogRef = this.dialog.open(_components_ajout_produit_ajout_produit_component__WEBPACK_IMPORTED_MODULE_0__["AjoutProduitComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    activateClient() {
        this.marchandService.update(this.customer).subscribe(m => this.customer = m);
    }
}
HomeMarchandComponent.??fac = function HomeMarchandComponent_Factory(t) { return new (t || HomeMarchandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__["MarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_9__["MarchandSyntheseService"])); };
HomeMarchandComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HomeMarchandComponent, selectors: [["app-home-marchand"]], decls: 23, vars: 7, consts: [[1, "container", "block"], [1, "col"], [1, "col", 2, "margin-right", "20px", "margin-left", "1150px"], [1, "btn", "btn-link", 3, "click"], [1, "nav", "justify-content-center", "tabs"], [1, "nav-item", 3, "click"], ["type", "button", "aria-current", "page", 1, "btn", "btn-link"], [4, "ngIf"], [2, "display", "block", "list-style-type", "none", "padding-left", "0px"], [1, "col", "block-add"], [2, "margin-left", "20%"], ["fill", "yellow", "width", "46", "height", "46", "viewBox", "0 0 20 20", 1, "svg-icon", 3, "click"], ["d", "M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"], ["mat-button", "", 2, "background-color", "yellow", "color", "black", 3, "click"], [1, "col", "block-demande"], ["type", "button", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]], template: function HomeMarchandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_Template_button_click_5_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Deconnexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_Template_li_click_8_listener() { return ctx.profil = "MARCHAND"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Espace Marchand");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_Template_li_click_11_listener() { return ctx.profil = "CLIENT"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, HomeMarchandComponent_div_12_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, HomeMarchandComponent_div_13_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_Template__svg_svg_click_17_listener() { return ctx.openPopinAjoutProduit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function HomeMarchandComponent_Template_button_click_19_listener() { return ctx.openPopinAjoutProduit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Ajouter un produit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](22, "app-suivi-demande-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("select", ctx.profil === "MARCHAND");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("select", ctx.profil === "CLIENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.customer.client === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.customer.client === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _components_suivi_demande_list_suivi_demande_list_component__WEBPACK_IMPORTED_MODULE_12__["SuiviDemandeListComponent"]], styles: [".divider[_ngcontent-%COMP%] {\n  border-block-end: black solid 1px;\n}\n\n.block-add[_ngcontent-%COMP%] {\n  margin-right: 70%;\n  margin-top: 3%;\n  border: black 1px dotted;\n  background-color: #19d228;\n}\n\n.block-demande[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  border: black 1px dotted;\n}"] });


/***/ }),

/***/ "EGxQ":
/*!**********************************!*\
  !*** ./src/app/common/common.ts ***!
  \**********************************/
/*! exports provided: CHAMP_VIDE_MSG, CHAMP_INVALID_MSG, MDP_INVALID_MSG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAMP_VIDE_MSG", function() { return CHAMP_VIDE_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAMP_INVALID_MSG", function() { return CHAMP_INVALID_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDP_INVALID_MSG", function() { return MDP_INVALID_MSG; });
const CHAMP_VIDE_MSG = 'ce champs n\'est pas enseign?? !';
const CHAMP_INVALID_MSG = 'Ce champs est invalide !!';
const MDP_INVALID_MSG = 'Les mots de passe ne corespondent pas !!';


/***/ }),

/***/ "FTRs":
/*!************************************************************************************!*\
  !*** ./src/app/admin-pages/gestion-green-repack/gestion-green-repack.component.ts ***!
  \************************************************************************************/
/*! exports provided: GestionGreenRepackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionGreenRepackComponent", function() { return GestionGreenRepackComponent; });
/* harmony import */ var _components_auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/auth-dialog/auth-dialog.component */ "Yxds");
/* harmony import */ var src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/auth.model */ "nNHX");
/* harmony import */ var _model_admin_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/admin.model */ "T6s4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_notifications_one_signal_notif_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/notifications/one-signal-notif.service */ "bGAv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_etat_gestion_demande_list_etat_gestion_demande_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/etat-gestion-demande-list/etat-gestion-demande-list.component */ "Jx0c");
/* harmony import */ var _components_demande_gestion_projetassos_demande_gestion_projetassos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/demande-gestion-projetassos/demande-gestion-projetassos.component */ "nWSw");











function GestionGreenRepackComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-etat-gestion-demande-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function GestionGreenRepackComponent_ng_template_18_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-demande-gestion-projetassos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function GestionGreenRepackComponent_ng_template_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Page en cours de maintenace !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function GestionGreenRepackComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, GestionGreenRepackComponent_ng_template_18_div_0_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, GestionGreenRepackComponent_ng_template_18_ng_template_1_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.pageType === "PAGE2")("ngIfElse", _r4);
} }
class GestionGreenRepackComponent {
    constructor(dialog, authService, router, notificationService) {
        this.dialog = dialog;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.iconHome = {};
        this.isFecth = false;
        this.title = 'Espace Gestion Green Repack';
        this.pageType = 'DEFAULT';
        this.pages = ['Demandes de produit reconditionner', 'Demandes de projets associatifs', 'Param??tre clients & gestion'];
        this.showNotif = false;
        this.nbNotifs = 3;
    }
    ngAfterContentInit() {
        if (this.isFecth === false) {
            this.authService.currentUser(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["AdminProfils"]()).subscribe(rst => {
                if (rst.uid !== null && rst.token && rst.email && Object(_model_admin_model__WEBPACK_IMPORTED_MODULE_2__["adminMailEquals"])(rst.email)) {
                    this.router.navigate(['admin/' + rst.uid]);
                }
                else {
                    this.openPopinAuthentAdmin();
                }
            });
        }
    }
    ngOnInit() {
        Object.assign(this.iconHome, { iconName: 'home' });
        console.log("Profil en cours: " + this.authService.profilRegister);
        this.authService.currentUser(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["AdminProfils"]()).subscribe(rst => {
            if (window.location.href.includes(rst.uid)) {
                this.isFecth = true;
            }
            else if (rst.uid !== null && rst.token && rst.email && Object(_model_admin_model__WEBPACK_IMPORTED_MODULE_2__["adminMailEquals"])(rst.email)) {
                this.router.navigate(['admin/' + rst.uid]);
            }
            else {
                //this.router.navigate(['admin']);
                this.isFecth = false;
            }
        });
    }
    redirect() {
        this.authService.forceLogout('admin');
    }
    openPopinAuthentAdmin() {
        const dialogRef = this.dialog.open(_components_auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_0__["AuthDialogComponent"]);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
GestionGreenRepackComponent.??fac = function GestionGreenRepackComponent_Factory(t) { return new (t || GestionGreenRepackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_notifications_one_signal_notif_service__WEBPACK_IMPORTED_MODULE_7__["OneSignalNotifService"])); };
GestionGreenRepackComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: GestionGreenRepackComponent, selectors: [["app-gestion-green-repack"]], decls: 20, vars: 12, consts: [[1, "container", "bloc"], [1, "col", 2, "margin-top", "4%"], [1, "col", 2, "margin-right", "20px", "margin-left", "1150px"], [1, "btn", "btn-link", 3, "click"], [1, "nav", "justify-content-start-0", "tabs"], [1, "nav-item", 3, "click"], ["type", "button", "aria-current", "page", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-link"], [4, "ngIf", "ngIfElse"], ["suiviDemBlock", ""], ["suiviParam", ""]], template: function GestionGreenRepackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function GestionGreenRepackComponent_Template_button_click_5_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Deconnexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function GestionGreenRepackComponent_Template_li_click_8_listener() { return ctx.pageType = "DEFAULT"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function GestionGreenRepackComponent_Template_li_click_11_listener() { return ctx.pageType = "PAGE2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function GestionGreenRepackComponent_Template_li_click_14_listener() { return ctx.pageType = "PAGE3"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, GestionGreenRepackComponent_div_17_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](18, GestionGreenRepackComponent_ng_template_18_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("select", ctx.pageType === "DEFAULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.pages[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("select", ctx.pageType === "PAGE2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.pages[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("select", ctx.pageType === "PAGE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.pages[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.pageType === "DEFAULT")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_etat_gestion_demande_list_etat_gestion_demande_list_component__WEBPACK_IMPORTED_MODULE_9__["EtatGestionDemandeListComponent"], _components_demande_gestion_projetassos_demande_gestion_projetassos_component__WEBPACK_IMPORTED_MODULE_10__["DemandeGestionProjetassosComponent"]], styles: [".divider[_ngcontent-%COMP%] {\n  border-block-end: black solid 1px;\n}\n\n.block-admin[_ngcontent-%COMP%] {\n  margin-top: 50%;\n}"] });


/***/ }),

/***/ "J0oq":
/*!**************************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/client/components/commandes/commandes.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CommandesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandesComponent", function() { return CommandesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommandesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommandesComponent.??fac = function CommandesComponent_Factory(t) { return new (t || CommandesComponent)(); };
CommandesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CommandesComponent, selectors: [["app-commandes"]], decls: 2, vars: 0, template: function CommandesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "commandes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ "Jx0c":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin-pages/components/etat-gestion-demande-list/etat-gestion-demande-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EtatGestionDemandeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatGestionDemandeListComponent", function() { return EtatGestionDemandeListComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/auth.model */ "nNHX");
/* harmony import */ var _model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/workflow-produit.model */ "uzoF");
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/app-const */ "09dN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/produit/produit-marchand.service */ "Lt4j");
/* harmony import */ var _service_paiment_paiment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/paiment/paiment.service */ "ANdH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "QibW");



















function EtatGestionDemandeListComponent_div_40_div_1_div_28_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " price is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Estimez le prix de vente !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, EtatGestionDemandeListComponent_div_40_div_1_div_28_mat_error_5_Template, 4, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_28_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r14); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r12.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx_r5.priceFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r5.priceFormControl.hasError("required"));
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_29_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r17); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r15.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, "G\u00E9n\u00E9rer le suivie de colis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" Il reste ", produitRecap_r4.recap.delais, " jour(s) pour la r\u00E9ception du produit !! ");
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_30_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " Le d\u00E9lais pour la r\u00E9ception du produit est pass\u00E9!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EtatGestionDemandeListComponent_div_40_div_1_div_30_div_1_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](2, EtatGestionDemandeListComponent_div_40_div_1_div_30_ng_template_2_Template, 2, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r24); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r22.validateProduit(produitRecap_r4.recap, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "Valider la r\u00E9ception du Colis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_30_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r24); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r25.validateProduit(produitRecap_r4.recap, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "Annuler la demande du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](3);
    const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", produitRecap_r4.recap.delais && produitRecap_r4.recap.delais > 0)("ngIfElse", _r19);
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_31_div_11_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, " price is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_31_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Estimez un autre prix de vente !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](5, EtatGestionDemandeListComponent_div_40_div_1_div_31_div_11_mat_error_5_Template, 4, 0, "mat-error", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formControl", ctx_r28.priceFormControl)("disabled", ctx_r28.validReponse !== "offre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r28.priceFormControl.hasError("required"));
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Choisir une option :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "mat-radio-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-radio-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_31_Template_mat_radio_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r30.validationReponse("oui"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "Valider et passer au paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_31_Template_mat_radio_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r32.validationReponse("non"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Refuser et demander un remboursement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-radio-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_31_Template_mat_radio_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3); return ctx_r33.validationReponse("offre"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Faire une nouvelle offre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](11, EtatGestionDemandeListComponent_div_40_div_1_div_31_div_11_Template, 6, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_31_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r31); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r34.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Choisir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r8.validReponse === "offre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", ctx_r8.validReponse === "" && ctx_r8.priceFormControl.value);
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, " Payer le marchand pour son produit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function EtatGestionDemandeListComponent_div_40_div_1_div_32_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r38); const produitRecap_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2); return ctx_r36.validate(produitRecap_r4.recap); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5, "Procedez au paiement du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Aucune action n'est requise !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
function EtatGestionDemandeListComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "mat-card-subtitle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "p-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "p-accordionTab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "categorie :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "caracteristique technique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "caracteristique esth\u00E9tique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "p-accordionTab", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](28, EtatGestionDemandeListComponent_div_40_div_1_div_28_Template, 9, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](29, EtatGestionDemandeListComponent_div_40_div_1_div_29_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](30, EtatGestionDemandeListComponent_div_40_div_1_div_30_Template, 8, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](31, EtatGestionDemandeListComponent_div_40_div_1_div_31_Template, 15, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](32, EtatGestionDemandeListComponent_div_40_div_1_div_32_Template, 6, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](33, EtatGestionDemandeListComponent_div_40_div_1_div_33_Template, 4, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "mat-card-footer", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const produitRecap_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate2"]("", produitRecap_r4.recap.marque, " - ", produitRecap_r4.recap.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" Etat: ", produitRecap_r4.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" user: ", produitRecap_r4.recap.user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", produitRecap_r4.recap.categorie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", produitRecap_r4.recap.info_tech, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", produitRecap_r4.recap.info_esth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitch", produitRecap_r4.recap.statut_validation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitchCase", "INIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitchCase", "DEMANDE_GENERATION_COLIS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitchCase", "EN_ATTENTE_RECEPTION_PRODUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitchCase", "EN_ATTENTE_VALIDATION_");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngSwitchCase", "VALIDATION_EN_ATTENTE_PAIEMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" Ajouter le ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](36, 15, produitRecap_r4.recap.date_ajout, "yyyy/MM/dd - HH:mm"), " ");
} }
function EtatGestionDemandeListComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, EtatGestionDemandeListComponent_div_40_div_1_Template, 37, 18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r0.produitRecaps);
} }
function EtatGestionDemandeListComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4, "Aucun produit n'a \u00E9t\u00E9 trouv\u00E9 !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
class EtatGestionDemandeListComponent {
    constructor(fbuilder, authService, produitService, paiementService) {
        this.fbuilder = fbuilder;
        this.authService = authService;
        this.produitService = produitService;
        this.paiementService = paiementService;
        this.etatFiltre = this.fbuilder.group({
            stateProductSelected: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
        this.stateProductSelected = this.fbuilder.control('');
        this.produitRecaps = [];
        this.priceFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]);
        this.nbjourRestant = 15;
        this.validReponse = '';
        this.paiement_link = '';
    }
    ngOnInit() {
        this.authService.currentUser(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["MarchandProfils"]()).subscribe(user => {
            if (this.authService.isFetch) {
                this.produitService.fetchAllProducts(null).subscribe(rst => {
                    if (rst.status === 'SUCCES' && rst.data.length > 0) {
                        //console.log("produits fetched: " + JSON.stringify(rst.data))
                        rst.data.forEach(d => {
                            this.produitRecaps.push({ recap: d, label: Object(_model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_2__["get_etat"])(d.statut_validation).label });
                        });
                    }
                });
            }
        });
    }
    applyFiltre() {
        this.produitRecaps.forEach(p => {
            this.produitRecaps.pop();
        });
        this.produitRecaps.pop();
        const state = this.etatFiltre.controls.stateProductSelected.value;
        console.log("Filtre = " + state);
        this.produitService.fetchAllProducts(state !== '' ? state : null).subscribe(rst => {
            if (rst.status === 'SUCCES' && rst.data.length > 0) {
                rst.data.forEach(d => {
                    this.produitRecaps.push({ recap: d, label: Object(_model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_2__["get_etat"])(d.statut_validation).label });
                });
            }
        });
    }
    validationReponse(anwser) {
        this.validReponse = anwser;
    }
    validate(recap) {
        switch (recap.statut_validation) {
            case 'INIT': //passage manuelle si non automatique
                if (this.priceFormControl.value !== 0) {
                    const val = this.priceFormControl.value;
                    console.log('price :' + val);
                    this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                        etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val });
                }
                break;
            case 'DEMANDE_GENERATION_COLIS': //passage manuelle si non automatique
                this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                    etat_dem_next: 'EN_ATTENTE_RECEPTION_PRODUIT' });
                break;
            case 'EN_ATTENTE_RECEPTION_PRODUIT': //passage manuelle et besoin de validation automatique externe
                console.log('reponse admin :' + this.nbjourRestant);
                this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                    etat_dem_next: 'EN_ATTENTE_VALIDATION_' });
                break;
            case 'EN_ATTENTE_VALIDATION_':
                console.log('reponse admin :' + this.validReponse);
                if (this.validReponse === 'oui') {
                    this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                        etat_dem_next: 'VALIDATION_EN_ATTENTE_PAIEMENT' });
                }
                else if (this.validReponse === 'non') {
                    this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                        etat_dem_next: 'ANNULATION_EN_ATTENTE_REMBOURSEMENT' });
                }
                else if (this.validReponse === 'offre' && this.priceFormControl.value !== 0) {
                    const val = this.priceFormControl.value;
                    this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                        etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val });
                }
                break;
            case 'VALIDATION_EN_ATTENTE_PAIEMENT':
                this.authService.currentUser(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["MarchandProfils"]()).subscribe(user => {
                    if (this.authService.isFetch) {
                        window.location.href = _assets_app_const__WEBPACK_IMPORTED_MODULE_3__["PAIEMENT_INIT"] + '?marchand=' + user.email;
                        this.paiement_link = _assets_app_const__WEBPACK_IMPORTED_MODULE_3__["PAIEMENT_INIT"] + '?marchand=' + user.email;
                        this.paiementService.paybox(user.email, 'MARCHAND');
                    }
                });
                // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                //   etat_dem_next: 'VALIDATION'});
                break;
        }
    }
    validateProduit(recap, rst) {
        switch (recap.statut_validation) {
            // case 'INIT': //passage manuelle si non automatique
            //   const val: number = this.priceFormControl.value;
            //   console.log('price :'+val);
            //   this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
            //   etat_dem_next: 'EN_ATTENTE_REPONSE_', prix: val});
            //   break;
            // case 'DEMANDE_GENERATION_COLIS': //passage manuelle si non automatique
            // this.produitService.updateProduct({email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
            //   etat_dem_next: 'EN_ATTENTE_RECEPTION_PRODUIT'});
            //   break;
            case 'EN_ATTENTE_RECEPTION_PRODUIT': //passage manuelle et besoin de validation automatique externe
                this.produitService.updateProduct({ email_user: recap.user, idproduit: recap.idprod, etat_dem_now: recap.statut_validation,
                    etat_dem_next: rst === true ? 'EN_ATTENTE_VALIDATION_' : 'ANNULATION' });
                break;
            //case 'EN_ATTENTE_VALIDATION_':
            default:
                break;
        }
    }
}
EtatGestionDemandeListComponent.??fac = function EtatGestionDemandeListComponent_Factory(t) { return new (t || EtatGestionDemandeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_6__["ProduitMarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_service_paiment_paiment_service__WEBPACK_IMPORTED_MODULE_7__["PaimentService"])); };
EtatGestionDemandeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: EtatGestionDemandeListComponent, selectors: [["app-etat-gestion-demande-list"]], decls: 43, vars: 3, consts: [[1, "col"], [1, "row"], ["appearance", "fill", 3, "formGroup"], ["defaultColor", "white"], ["formControlName", "stateProductSelected", "defaultTabIndex", "1", 3, "selectionChange"], ["value", ""], ["value", "INIT"], ["value", "DEMANDE_GENERATION_COLIS"], ["value", "EN_ATTENTE_RECEPTION_PRODUIT"], ["value", "EN_ATTENTE_VALIDATION_"], ["value", "EN_ATTENTE_REPONSE_"], ["value", "VALIDATION_EN_ATTENTE_PAIEMENT"], ["value", "ANNULATION_EN_ATTENTE_REMBOURSEMENT"], ["value", "ANNULATION"], ["value", "VALIDATION"], [4, "ngIf", "ngIfElse"], ["emptyProducts", ""], ["class", "row produit", 4, "ngFor", "ngForOf"], [1, "row", "produit"], [1, "col-subtitle"], ["header", "Recapitulatif du produit"], [1, "recap"], ["header", "Action requise", 3, "selected"], [3, "ngSwitch"], ["class", "action-block", 4, "ngSwitchCase"], ["class", "action-block", 4, "ngSwitchDefault"], [1, "footer"], [1, "action-block"], ["type", "number", "matInput", "", "placeholder", "50.23", 3, "formControl"], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["expireMsg", ""], ["mat-flat-button", "", "color", "primary", "disabled", "produitRecap.recap.delais && produitRecap.recap.delais <= 0", 3, "click"], ["value", "1", 1, "props", 3, "click"], ["value", "2", 1, "props", 3, "click"], ["value", "3", 1, "props", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["type", "number", "matInput", "", "placeholder", "50.23", 3, "formControl", "disabled"]], template: function EtatGestionDemandeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Demande en cours (Filtre)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8, "Etat de demande");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("selectionChange", function EtatGestionDemandeListComponent_Template_mat_select_selectionChange_9_listener() { return ctx.applyFiltre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "-- AUCUN --");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "INIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "DEMANDE_GENERATION_COLIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "EN_ATTENTE_RECEPTION_PRODUIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](21, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23, "EN_ATTENTE_VALIDATION_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](26, "EN_ATTENTE_REPONSE_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](27, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](29, "EN_ATTENTE_VALIDATION_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, "EN_ATTENTE_VALIDATION_");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, "ANNULATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](37, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](38, "VALIDATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](40, EtatGestionDemandeListComponent_div_40_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](41, EtatGestionDemandeListComponent_ng_template_41_Template, 5, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????reference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("formGroup", ctx.etatFiltre);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.produitRecaps && ctx.produitRecaps.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["Accordion"], primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionTab"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchDefault"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: [".recap[_ngcontent-%COMP%] {\n  margin-left: 1%;\n}\n\nli[_ngcontent-%COMP%] {\n  display: block;\n}\n\nli[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 3%;\n}\n\n.produit[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 3%;\n}\n\n.produit[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  margin-left: 3%;\n}\n\n.col-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.col-subtitle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: 10%;\n  width: auto;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-accordion-header {\n  background-color: antiquewhite;\n  border-left: solid 1px black;\n  border-top: solid 1px black;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab .p-accordion-header a.p-accordion-header-link {\n  color: black;\n  font-weight: bold;\n  margin: 8px 8px 8px 8px;\n}\n\n[_nghost-%COMP%]     div.p-accordion .p-accordion-tab div.p-accordion-header:active {\n  background-color: #bb7517;\n}\n\n.action-block[_ngcontent-%COMP%] {\n  margin-left: 1%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  margin-left: 2%;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.props[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });


/***/ }),

/***/ "Lt4j":
/*!*************************************************************!*\
  !*** ./src/app/service/produit/produit-marchand.service.ts ***!
  \*************************************************************/
/*! exports provided: ProduitMarchandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitMarchandService", function() { return ProduitMarchandService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/app-const */ "09dN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ProduitMarchandService {
    constructor(http) {
        this.http = http;
    }
    addProduit(body) {
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_AJOUT_ENDPOINT"], body);
    }
    updateProduct(body) {
        const result = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_MISAJOURS_ENDPOINT"], body)
            .subscribe(r => console.log("API PRODUIT_MISAJOURS_ENDPOINT <= STATUS =" + JSON.stringify(r)));
    }
    fetchMarchandProducts(usermail, etat_dem) {
        let paramSearch = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        paramSearch = paramSearch.append('email_user', usermail);
        if (etat_dem !== null) {
            paramSearch = paramSearch.append('etat_dem', etat_dem);
        }
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_LIST_RECHERCHE_ENDPOINT"], { params: paramSearch })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => {
            console.log("API PRODUIT_MARCHAND_LIST_RECHERCH <= " + JSON.stringify(val));
            return val;
        }));
    }
    fetchAllProducts(etat_dem) {
        let paramSearch = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        if (etat_dem !== null) {
            paramSearch = paramSearch.append('etat_dem', etat_dem);
        }
        return paramSearch.has('etat_dem') ? this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT"], { params: paramSearch })
            : this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_LIST_ADMIN_RECHERCHE_ENDPOINT"])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => {
                console.log("API PRODUIT_LIST_RECHERCH <= " + JSON.stringify(val));
                return val;
            }));
    }
    findProduct(idProd) {
        let paramSearch = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        paramSearch = paramSearch.append('idprod', idProd);
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_2__["PRODUIT_GET_RECHERCHE_ENDPOINT"], { params: paramSearch });
    }
}
ProduitMarchandService.??fac = function ProduitMarchandService_Factory(t) { return new (t || ProduitMarchandService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ProduitMarchandService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: ProduitMarchandService, factory: ProduitMarchandService.??fac, providedIn: 'root' });


/***/ }),

/***/ "LwhQ":
/*!*******************************************************!*\
  !*** ./src/app/lib/primeng-lib/primeng-lib.module.ts ***!
  \*******************************************************/
/*! exports provided: PrimengLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengLibModule", function() { return PrimengLibModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PrimengLibModule {
}
PrimengLibModule.??fac = function PrimengLibModule_Factory(t) { return new (t || PrimengLibModule)(); };
PrimengLibModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: PrimengLibModule });
PrimengLibModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputTextModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]
        ], primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputTextModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](PrimengLibModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputTextModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]], exports: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputTextModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]] }); })();


/***/ }),

/***/ "Nc1H":
/*!**********************************************************!*\
  !*** ./src/app/common/header/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: InfoUser, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoUser", function() { return InfoUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/auth.model */ "nNHX");
/* harmony import */ var _model_admin_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/admin.model */ "T6s4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/marchand/marchand.service */ "OI+E");
/* harmony import */ var _service_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/client/client.service */ "b2fQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("User : ", ctx_r0.infoUser.user == null ? null : ctx_r0.infoUser.user.nom, "");
} }
class InfoUser {
    constructor(t) {
        this.user = t;
        this.current = {};
    }
}
class HeaderComponent {
    constructor(authService, marchandService, clientService, router) {
        var _a;
        this.authService = authService;
        this.marchandService = marchandService;
        this.clientService = clientService;
        this.router = router;
        this.title = 'Green Repack';
        this.user_active = false;
        this.subcriptions = [];
        switch ((_a = this.authService.profilRegister) === null || _a === void 0 ? void 0 : _a.type) {
            case 'GESTION':
                this.infoUser = new InfoUser({});
                this.profilActive = new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_0__["AdminProfils"]();
                break;
            case 'MARCHAND':
                this.infoUser = new InfoUser({});
                this.profilActive = new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]();
                break;
            case 'CLIENT':
                this.infoUser = new InfoUser({});
                this.profilActive = new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_0__["ClientProfils"]();
                break;
            default:
                this.infoUser = null;
        }
    }
    ngOnInit() {
        if (this.infoUser) {
            this.checkUser();
        }
    }
    ngDoCheck() {
        //this.checkUser();
    }
    // ngOnDestroy(){
    //   this.subcriptions.forEach(s => s.unsubscribe);
    // }
    checkUser() {
        this.authService.currentUser(this.profilActive)
            .subscribe((user) => {
            var _a;
            this.user_active = user.email !== null && user.token !== null;
            if (!this.user_active) {
                this.router.navigate(['connexion']);
            }
            else {
                this.infoUser.current = user;
                switch ((_a = this.authService.profilRegister) === null || _a === void 0 ? void 0 : _a.type) {
                    case 'GESTION':
                        if (!Object(_model_admin_model__WEBPACK_IMPORTED_MODULE_1__["adminMailEquals"])(user.email))
                            this.router.navigateByUrl('admin');
                        this.infoUser.user.nom = user.email;
                        break;
                    case 'MARCHAND':
                        this.marchandService.searchMarchand('email', user.email)
                            .subscribe(rst => {
                            //if(rst.value.email !== user.email ) this.router.navigateByUrl('connexion');
                            this.infoUser.user = rst.value;
                        });
                        break;
                    case 'CLIENT':
                        this.clientService.get('email', user.email)
                            .subscribe(rst => {
                            if (rst) {
                                this.infoUser.user = rst;
                            }
                            else {
                                //this.router.navigateByUrl('connexion');
                            }
                        });
                        break;
                    default:
                        this.infoUser = null;
                }
            }
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__["MarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 2, consts: [["role", "banner", 1, "toolbar"], ["src", "assets/logo.png", "alt", "logo", "widht", "50px", "height", "50px"], [1, "spacer"], ["class", "identity", 4, "ngIf"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://youtube.com/angular", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"], [1, "identity"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, HeaderComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.infoUser !== null || ctx.infoUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #19d228;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ "OI+E":
/*!******************************************************!*\
  !*** ./src/app/service/marchand/marchand.service.ts ***!
  \******************************************************/
/*! exports provided: MarchandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarchandService", function() { return MarchandService; });
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/app-const */ "09dN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MarchandService {
    constructor(http) {
        this.http = http;
    }
    searchMarchand(key, value) {
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["MARCHAND_RECHERCHE_ENDPOINT"] + '?' + key + '=' + value);
    }
    createMarchand(body) {
        const req = { nom: body.nom, email: body.email, adresse: body.adresse };
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["MARCHAND_INSCRIPTION_ENDPOINT"], req);
    }
    update(body) {
        const req = { idmar: body.idmar, nom: body.nom, email: body.email, adresse: body.adresse };
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_0__["MARCHAND_UPDATE_ENDPOINT"], req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(rst => {
            console.log;
            return rst.data;
        }));
    }
}
MarchandService.??fac = function MarchandService_Factory(t) { return new (t || MarchandService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MarchandService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: MarchandService, factory: MarchandService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Pcj6":
/*!**************************************************!*\
  !*** ./src/app/service/common/upload.service.ts ***!
  \**************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");


class UploadService {
    //uploadTask: AngularFireUploadTask;
    constructor(storage) {
        this.storage = storage;
    }
    imagesProductToStorage(profil, idProduit, files) {
        const basePath = `/upload/${profil.type.toLowerCase()}/${idProduit}/images`;
        let results = [];
        for (let i = 0; i < files.length; i++) {
            const name = `/image_${i}`;
            const filePath = `${basePath}/${name}`;
            //const storageRef = this.storage.ref(filePath);
            const uploadTask = this.storage.upload(filePath, files[i]);
            // uploadTask.snapshotChanges().subscribe(obs => {
            //   //do sommething
            // });
            /**
             * get url of uploaded /or file
             */
            // uploadTask.then(obs => {
            //   obs?.ref.getDownloadURL()
            //   .then(data => {
            //     console.log('File metadata searched: ' + JSON.stringify(data));
            //     product.urls_image?.push(data);
            //   })
            //   .catch(err => console.log(`error : fichier ${idProduit}/${name} not found : ${err}`));
            // })
            // .catch(err => console.log(' Error during upload: '+err));
        }
        /**
         * Add in produit to database
         */
        //this.database.list(profil.type.toLowerCase()+'/products').push(product);
    }
}
UploadService.??fac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
UploadService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UploadService, factory: UploadService.??fac, providedIn: 'root' });


/***/ }),

/***/ "Q7iX":
/*!************************************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/marchand/components/ajout-produit/ajout-produit.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AjoutProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutProduitComponent", function() { return AjoutProduitComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/auth.model */ "nNHX");
/* harmony import */ var _model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../model/workflow-produit.model */ "uzoF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../service/produit/produit-marchand.service */ "Lt4j");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var _service_common_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../service/common/upload.service */ "Pcj6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../service/marchand/synthese/marchand-synthese.service */ "5n6B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



















function AjoutProduitComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AjoutProduitComponent_div_50_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("mat-dialog-close", true);
} }
function AjoutProduitComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("mat-dialog-close", false);
} }
class AjoutProduitComponent {
    constructor(fbuilder, produitService, authService, uploadService, router, syntheseMarchandService, datepipe) {
        this.fbuilder = fbuilder;
        this.produitService = produitService;
        this.authService = authService;
        this.uploadService = uploadService;
        this.router = router;
        this.syntheseMarchandService = syntheseMarchandService;
        this.datepipe = datepipe;
        this.produitForm = this.fbuilder.group({
            categorie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            marque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            carac_tech: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(300)]],
            carac_esth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(300)]]
        });
        this.formValid = () => this.produitForm.valid
            && this.images.length <= 6 && this.images.length > 0;
        this.images = [];
    }
    ngOnInit() {
        this.produitForm.valueChanges.subscribe(vals => {
        });
    }
    onUploadSelected(files) {
        for (var f of files) {
            console.log('f :' + f);
            this.images.push(f);
        }
        console.log('files nb: ' + this.images.length);
        console.log("validity = " + this.formValid);
        //console.log('files :' + JSON.stringify(event) + '' + typeof event);
    }
    onUploadRemove(file) {
        this.images = this.images.filter(img => img !== file);
        console.log('files nb: ' + this.images.length);
        console.log("validity = " + this.formValid);
    }
    onClearAll() {
        this.images = [];
        console.log('files nb: ' + this.images.length);
        console.log("validity = " + this.formValid());
    }
    onSubmit() {
        const { categorie, marque, model, carac_tech, carac_esth } = this.produitForm.value;
        this.authService.currentUser(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["MarchandProfils"]()).subscribe(r => {
            if (!this.authService.isFetch) {
                this.router.navigateByUrl('connexion');
            }
            else {
                console.log('produits :' + JSON.stringify(this.produitForm.value) + ' user-email: ' + r.email);
                this.produitService.addProduit({ user_email: r.email, marque: marque, model: model, categorie: categorie, info_tech: carac_tech, info_esth: carac_esth })
                    .subscribe(res => {
                    const idProduit = res.id;
                    if (res.status === 'SUCCES' && idProduit && r.email !== null) {
                        this.uploadService.imagesProductToStorage(new src_app_model_auth_model__WEBPACK_IMPORTED_MODULE_1__["MarchandProfils"](), idProduit, this.images);
                        const newState = Object(_model_workflow_produit_model__WEBPACK_IMPORTED_MODULE_2__["genererNextEtatOfProduit"])('NONE', idProduit, 'vendeur', 1, 0, null, false);
                        newState.expediteur = r.email;
                        newState.destinataire = 'green-repack';
                        newState.notifDestinataire = 'green-repack';
                        let date_str = res.date;
                        newState.setDate(date_str);
                        this.syntheseMarchandService.pushMarchandProduitsState(newState);
                    }
                    ;
                });
            }
        });
    }
}
AjoutProduitComponent.??fac = function AjoutProduitComponent_Factory(t) { return new (t || AjoutProduitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_produit_produit_marchand_service__WEBPACK_IMPORTED_MODULE_4__["ProduitMarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_common_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_marchand_synthese_marchand_synthese_service__WEBPACK_IMPORTED_MODULE_8__["MarchandSyntheseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"])); };
AjoutProduitComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AjoutProduitComponent, selectors: [["ng-component"]], decls: 53, vars: 7, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [2, "margin-bottom", "25%", "margin-top", "12%", 3, "formGroup"], ["appearance", "fill"], ["formControlName", "categorie"], ["value", "t\u00E9l\u00E9phones"], ["value", "objets connect\u00E9s"], ["value", "gros \u00E9lectrom\u00E9nagers"], ["value", "bricolage"], ["value", "ordinateurs"], ["formControlName", "marque", "placeholder", "ex: Samsung", "matInput", ""], ["formControlName", "model", "placeholder", "ex: Galaxy S7", "matInput", ""], ["formControlName", "carac_tech", "matInput", ""], ["formControlName", "carac_esth", "matInput", ""], ["url", "url", "accept", "image/*", "chooseLabel", ">> Cliquer ici pour choisir des images >> ", 3, "multiple", "auto", "showUploadButton", "fileLimit", "onSelect", "onRemove", "onClear"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [4, "ngIf", "ngIfElse"], ["valid", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], ["mat-button", "", "cdkFocusInitial", "", "disabled", "", 3, "mat-dialog-close"]], template: function AjoutProduitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Ajouter un produit \u00E0 recycler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Categorie *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "T\u00E9l\u00E9phones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Objets connect\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Gros \u00E9lectrom\u00E9nagers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Bricolage");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Ordinateurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "Marque *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Model *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "Caracteristique technique *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](37, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](41, "Caracteristique esth\u00E9tique *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](42, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "Images du produit (6 maximum)*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "p-fileUpload", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("onSelect", function AjoutProduitComponent_Template_p_fileUpload_onSelect_46_listener($event) { return ctx.onUploadSelected($event.files); })("onRemove", function AjoutProduitComponent_Template_p_fileUpload_onRemove_46_listener($event) { return ctx.onUploadRemove($event.file); })("onClear", function AjoutProduitComponent_Template_p_fileUpload_onClear_46_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "mat-dialog-actions", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](50, AjoutProduitComponent_div_50_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](51, AjoutProduitComponent_ng_template_51_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.produitForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("multiple", true)("auto", false)("showUploadButton", false)("fileLimit", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.formValid())("ngIfElse", _r1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__["FileUpload"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_notifications_one_signal_notif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/notifications/one-signal-notif.service */ "bGAv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_header_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/header/header/header.component */ "Nc1H");




class AppComponent {
    constructor(notificationService, routeActived) {
        this.notificationService = notificationService;
        this.routeActived = routeActived;
        this.title = 'Green Repack';
    }
    ngOnInit() {
        //this.notificationService.onInit();
        console.log("current route => " + window.location.href);
        //this.notificationService.onUserCreate("ex82ZuzFB4P4h3kFy3nKlThb5FR2");
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_notifications_one_signal_notif_service__WEBPACK_IMPORTED_MODULE_1__["OneSignalNotifService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
    } }, directives: [_common_header_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [""] });


/***/ }),

/***/ "T6s4":
/*!**************************************!*\
  !*** ./src/app/model/admin.model.ts ***!
  \**************************************/
/*! exports provided: adminMailEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminMailEquals", function() { return adminMailEquals; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const ADMIN_PATTERN_MAIL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].admin_mail;
function adminMailEquals(s) {
    return s === ADMIN_PATTERN_MAIL || s.includes(ADMIN_PATTERN_MAIL);
}


/***/ }),

/***/ "TYRr":
/*!***************************************************************************************!*\
  !*** ./src/app/customers-pages/authentification/auth-client/auth-client.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AuthClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthClientComponent", function() { return AuthClientComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/common */ "EGxQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _service_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/client/client.service */ "b2fQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AuthClientComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.messageErreur[0].errMsg);
} }
//maintenance
class AuthClientComponent {
    constructor(authService, fbuilder, firebaseAuth, clientService, router) {
        this.authService = authService;
        this.fbuilder = fbuilder;
        this.firebaseAuth = firebaseAuth;
        this.clientService = clientService;
        this.router = router;
        this.err_send = '';
        this.messageErreur = [
            { value: '', errMsg: '' },
            { value: '', errMsg: '' } //pswd
        ];
        this.clientForm = this.fbuilder.group({
            nomControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            pswdControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]]
        });
    }
    ngOnInit() {
        sessionStorage.setItem('PROFIL', '');
        this.clientForm.valueChanges.subscribe(v => {
            const { email, pswd } = v;
            //console.log('user change: ' + JSON.stringify(v));
            this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5) ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
            this.messageErreur[0].errMsg = email === '' && !pswd.includes('@') ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
        });
    }
    onSubmit() {
        this.firebaseAuth.signOut();
        const { nomControl, pswdControl } = this.clientForm.value;
        console.log('user : ' + nomControl);
        this.clientService.get('email', nomControl).subscribe(cl => {
            this.err_send = '';
            if (cl) {
                this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
                    .then(rst => {
                    var _a;
                    console.log("connexion start ... " + JSON.stringify(rst));
                    this.err_send = '';
                    sessionStorage.setItem('PROFIL', 'CLIENT'.toLowerCase());
                    //sessionStorage.setItem('USER_CURRENT', nomControl);
                    this.router.navigate(['home/' + ((_a = rst.user) === null || _a === void 0 ? void 0 : _a.uid)]);
                })
                    .catch(err => {
                    console.log("connexion fail ... " + JSON.stringify(err));
                    this.err_send = 'les donn??es renseign??es sont invalid !!';
                });
            }
            else {
                this.err_send = 'L\'identifiant renseign??es n\'est pas reconnu !!';
            }
        });
    }
}
AuthClientComponent.??fac = function AuthClientComponent_Factory(t) { return new (t || AuthClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AuthClientComponent, selectors: [["app-auth-client"]], decls: 24, vars: 4, consts: [[1, "sub-block", 3, "formGroup"], [1, "col-10", "field-block"], [1, "col"], ["for", "email-field", 2, "margin-right", "1%"], ["formControlName", "nomControl", "id", "email-field", "type", "email", 2, "width", "250px"], ["class", "col", 4, "ngIf"], ["for", "password-field", 2, "margin-right", "1%"], ["formControlName", "pswdControl", "id", "password-field", "type", "password", 2, "width", "250px"], ["id", "password-field", 1, "p-error", 2, "margin-left", "9%"], [1, "col", 2, "margin-top", "5%"], [1, "row"], ["type", "button", 1, "btn", "btn-primary", "active", 3, "click"], ["id", "passwordConfirm-field", 1, "p-error", 2, "margin-left", "9%"], [1, "p-error", 2, "margin-left", "9%"]], template: function AuthClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AuthClientComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, " Mot de Passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AuthClientComponent_Template_button_click_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.clientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.messageErreur[0].errMsg !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.messageErreur[1].errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.err_send);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".sub-block[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-right: 10%;\n  margin-left: 10%;\n  margin-bottom: 2.5%;\n}\n\n.field-block[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 10%;\n}"] });


/***/ }),

/***/ "V/hJ":
/*!*******************************************************************************************!*\
  !*** ./src/app/customers-pages/authentification/auth-marchand/auth-marchand.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthMarchandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMarchandComponent", function() { return AuthMarchandComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/common */ "EGxQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AuthMarchandComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.messageErreur[0].errMsg);
} }
class AuthMarchandComponent {
    constructor(authService, fbuilder, firebaseAuth, router) {
        this.authService = authService;
        this.fbuilder = fbuilder;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.profil = '';
        this.err_send = '';
        this.messageErreur = [
            { value: '', errMsg: '' },
            { value: '', errMsg: '' } //pswd
        ];
        this.marchandForm = this.fbuilder.group({
            nomControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            pswdControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]]
        });
    }
    ngOnInit() {
        sessionStorage.setItem('PROFIL', '');
        this.marchandForm.valueChanges.subscribe(v => {
            const { email, pswd } = v;
            //console.log('user change: ' + JSON.stringify(v));
            this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5) ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
            this.messageErreur[0].errMsg = email === '' && !pswd.includes('@') ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
        });
    }
    onSubmit() {
        this.firebaseAuth.signOut();
        const { nomControl, pswdControl } = this.marchandForm.value;
        console.log('user : ' + nomControl);
        this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
            .then(rst => {
            var _a;
            console.log("connexion start ... " + JSON.stringify(rst));
            this.err_send = '';
            sessionStorage.setItem('PROFIL', this.profil);
            //sessionStorage.setItem('USER_CURRENT', nomControl);
            this.router.navigate(['home/' + ((_a = rst.user) === null || _a === void 0 ? void 0 : _a.uid)]);
        })
            .catch(err => {
            console.log("connexion fail ... " + JSON.stringify(err));
            this.err_send = 'les donn??es renseign??es sont invalid !!';
        });
    }
}
AuthMarchandComponent.??fac = function AuthMarchandComponent_Factory(t) { return new (t || AuthMarchandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthMarchandComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AuthMarchandComponent, selectors: [["app-auth-marchand"]], inputs: { profil: "profil" }, decls: 24, vars: 4, consts: [[1, "sub-block", 3, "formGroup"], [1, "col-10", "field-block"], [1, "col"], ["for", "email-field", 2, "margin-right", "1%"], ["formControlName", "nomControl", "id", "email-field", "type", "email", 2, "width", "250px"], ["class", "col", 4, "ngIf"], ["for", "password-field", 2, "margin-right", "1%"], ["formControlName", "pswdControl", "id", "password-field", "type", "password", 2, "width", "250px"], ["id", "password-field", 1, "p-error", 2, "margin-left", "9%"], [1, "col", 2, "margin-top", "5%"], [1, "row"], ["type", "button", 1, "btn", "btn-primary", "active", 3, "click"], ["id", "passwordConfirm-field", 1, "p-error", 2, "margin-left", "9%"], [1, "p-error", 2, "margin-left", "9%"]], template: function AuthMarchandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AuthMarchandComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, " Mot de Passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AuthMarchandComponent_Template_button_click_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.marchandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.messageErreur[0].errMsg !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.messageErreur[1].errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.err_send);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".sub-block[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-right: 10%;\n  margin-left: 10%;\n  margin-bottom: 2.5%;\n}\n\n.field-block[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 10%;\n}"] });


/***/ }),

/***/ "VyAD":
/*!**********************************************************************!*\
  !*** ./src/app/customers-pages/inscription/inscription.component.ts ***!
  \**********************************************************************/
/*! exports provided: InscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function() { return InscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inscription_marchand_inscription_marchand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inscription-marchand/inscription-marchand.component */ "aTUy");



class InscriptionComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Inscription';
        this.profil = 'CLIENT';
    }
    ngOnInit() {
    }
    redirect() {
        this.router.navigate(['connexion']);
    }
}
InscriptionComponent.??fac = function InscriptionComponent_Factory(t) { return new (t || InscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
InscriptionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InscriptionComponent, selectors: [["app-inscription"]], decls: 5, vars: 1, consts: [[1, "container", "block"], [1, "col"]], template: function InscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-inscription-marchand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_inscription_marchand_inscription_marchand_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionMarchandComponent"]], styles: [""] });


/***/ }),

/***/ "XEgj":
/*!********************************************************************************!*\
  !*** ./src/app/customers-pages/authentification/authentification.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationComponent", function() { return AuthentificationComponent; });
/* harmony import */ var _model_auth_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/auth.model */ "nNHX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _auth_marchand_auth_marchand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-marchand/auth-marchand.component */ "V/hJ");





class AuthentificationComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Connexion';
        this.profil = 'CLIENT';
        this.subs = [];
    }
    ngOnDestroy() {
        this.subs.forEach(s => s.unsubscribe());
    }
    ngOnInit() {
        //if(sessionStorage.getItem('PROFILS') === this.authService.profilRegister && this.authService.profilRegister!= null) {
        if (sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'client') {
            this.authService.currentUser(new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["ClientProfils"]()).subscribe(rst => {
                if (rst && rst.uid && rst.email) {
                    this.router.navigate(['home/' + rst.uid]);
                }
            });
        }
        else if (sessionStorage.getItem('PROFILS') && sessionStorage.getItem('PROFILS') === 'marchand') {
            this.authService.currentUser(new _model_auth_model__WEBPACK_IMPORTED_MODULE_0__["MarchandProfils"]()).subscribe(rst => rst.uid !== null
                && rst.email ? this.router.navigate(['home/' + rst.uid]) : null);
        }
    }
    redirect() {
        this.router.navigate(['inscription']);
    }
}
AuthentificationComponent.??fac = function AuthentificationComponent_Factory(t) { return new (t || AuthentificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthentificationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AuthentificationComponent, selectors: [["app-authentification"]], decls: 8, vars: 1, consts: [[1, "container", "block"], [1, "col"], [1, "col", 2, "margin-right", "20px", "margin-left", "1160px"], [1, "btn", "btn-link", 3, "click"], ["profil", "marchand"]], template: function AuthentificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function AuthentificationComponent_Template_button_click_5_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "S'inscrire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "app-auth-marchand", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_auth_marchand_auth_marchand_component__WEBPACK_IMPORTED_MODULE_4__["AuthMarchandComponent"]], styles: [""] });


/***/ }),

/***/ "XPME":
/*!********************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/client/components/panier/panier.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PanierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanierComponent", function() { return PanierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PanierComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanierComponent.??fac = function PanierComponent_Factory(t) { return new (t || PanierComponent)(); };
PanierComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PanierComponent, selectors: [["app-panier"]], decls: 2, vars: 0, template: function PanierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "panier works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ "Yxds":
/*!*****************************************************************************!*\
  !*** ./src/app/admin-pages/components/auth-dialog/auth-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDialogComponent", function() { return AuthDialogComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/common */ "EGxQ");
/* harmony import */ var _model_admin_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/admin.model */ "T6s4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function AuthDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r0.messageErreur[0].errMsg);
} }
function AuthDialogComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuthDialogComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("mat-dialog-close", true);
} }
function AuthDialogComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("mat-dialog-close", false);
} }
class AuthDialogComponent {
    constructor(authService, fbuilder, firebaseAuth, router) {
        this.authService = authService;
        this.fbuilder = fbuilder;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.err_send = '';
        this.messageErreur = [
            { value: '', errMsg: '' },
            { value: '', errMsg: '' } //pswd
        ];
        this.adminForm = this.fbuilder.group({
            nomControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            pswdControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]]
        });
        this.formValid = () => this.adminForm.controls.nomControl.valid && this.adminForm.controls.pswdControl.valid;
    }
    ngOnInit() {
        this.adminForm.valueChanges.subscribe(v => {
            const { email, pswd } = v;
            //console.log('user change: ' + JSON.stringify(v));
            this.messageErreur[1].errMsg = pswd === '' && !(email.length >= 5) ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
            this.messageErreur[0].errMsg = email === '' && !pswd.includes('@') ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
        });
        this.adminForm.controls.nomControl.setValue('green-repack@admin.com');
    }
    onSubmit() {
        const { nomControl, pswdControl } = this.adminForm.value;
        console.log('user : ' + nomControl);
        if (Object(_model_admin_model__WEBPACK_IMPORTED_MODULE_2__["adminMailEquals"])(nomControl)) {
            this.firebaseAuth.signInWithEmailAndPassword(nomControl, pswdControl)
                .then(rst => {
                console.log("connexion start ... " + JSON.stringify(rst));
                this.err_send = '';
                sessionStorage.setItem('PROFIL', 'GESTION'.toLowerCase());
                //this.router.navigate(['/marchand/home/'+rst.user?.uid]);
            })
                .catch(err => {
                console.log("connexion fail ... " + JSON.stringify(err));
                this.err_send = 'les donn??es renseign??es sont invalid !!';
            });
        }
    }
}
AuthDialogComponent.??fac = function AuthDialogComponent_Factory(t) { return new (t || AuthDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AuthDialogComponent, selectors: [["app-auth-dialog"]], decls: 28, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "formGroup"], [1, "col-10"], [1, "col"], ["for", "email-field", 2, "margin-right", "1%"], ["formControlName", "nomControl", "id", "email-field", "type", "email", 2, "width", "250px"], ["class", "col", 4, "ngIf"], ["for", "password-field", 2, "margin-right", "1%"], ["formControlName", "pswdControl", "id", "password-field", "type", "password", 2, "width", "250px"], ["id", "password-field", 1, "p-error", 2, "margin-left", "9%"], [1, "col", 2, "margin-top", "5%"], [1, "row"], ["align", "center"], [4, "ngIf", "ngIfElse"], ["novalid", ""], [1, "p-error", 2, "margin-left", "9%"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], ["mat-button", "", "cdkFocusInitial", "", "disabled", "", 3, "mat-dialog-close"]], template: function AuthDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Acc\u00E8s admin Green Repack");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, AuthDialogComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, " Mot de Passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-dialog-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, AuthDialogComponent_div_25_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, AuthDialogComponent_ng_template_26_Template, 2, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.adminForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.messageErreur[0].errMsg !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.messageErreur[1].errMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.err_send);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.adminForm.valid)("ngIfElse", _r2);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"]], styles: [""] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _customers_pages_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-pages/authentification/authentification.component */ "XEgj");
/* harmony import */ var _customers_pages_inscription_inscription_marchand_inscription_marchand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-pages/inscription/inscription-marchand/inscription-marchand.component */ "aTUy");
/* harmony import */ var _customers_pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-pages/inscription/inscription.component */ "VyAD");
/* harmony import */ var _lib_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/material/material.module */ "+KB1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _lib_primeng_lib_primeng_lib_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/primeng-lib/primeng-lib.module */ "LwhQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _customers_pages_authentification_auth_marchand_auth_marchand_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customers-pages/authentification/auth-marchand/auth-marchand.component */ "V/hJ");
/* harmony import */ var _customers_pages_customer_home_marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customers-pages/customer-home/marchand/home-marchand/home-marchand.component */ "Dgc0");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _admin_pages_gestion_green_repack_gestion_green_repack_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-pages/gestion-green-repack/gestion-green-repack.component */ "FTRs");
/* harmony import */ var _customers_pages_customer_home_marchand_components_suivi_demande_list_suivi_demande_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customers-pages/customer-home/marchand/components/suivi-demande-list/suivi-demande-list.component */ "CjmX");
/* harmony import */ var _customers_pages_customer_home_marchand_components_ajout_produit_ajout_produit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customers-pages/customer-home/marchand/components/ajout-produit/ajout-produit.component */ "Q7iX");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ "NCSE");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _common_header_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/header/header/header.component */ "Nc1H");
/* harmony import */ var _admin_pages_components_auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-pages/components/auth-dialog/auth-dialog.component */ "Yxds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_pages_components_etat_gestion_demande_list_etat_gestion_demande_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-pages/components/etat-gestion-demande-list/etat-gestion-demande-list.component */ "Jx0c");
/* harmony import */ var _admin_pages_components_demande_gestion_projetassos_demande_gestion_projetassos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-pages/components/demande-gestion-projetassos/demande-gestion-projetassos.component */ "nWSw");
/* harmony import */ var _customers_pages_inscription_inscription_client_inscription_client_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./customers-pages/inscription/inscription-client/inscription-client.component */ "f17/");
/* harmony import */ var _customers_pages_authentification_auth_client_auth_client_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./customers-pages/authentification/auth-client/auth-client.component */ "TYRr");
/* harmony import */ var _customers_pages_customer_home_client_home_client_home_client_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./customers-pages/customer-home/client/home-client/home-client.component */ "w9/1");
/* harmony import */ var _customers_pages_customer_home_client_components_produits_achats_produits_achats_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./customers-pages/customer-home/client/components/produits-achats/produits-achats.component */ "jbdk");
/* harmony import */ var _customers_pages_customer_home_client_components_commandes_commandes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./customers-pages/customer-home/client/components/commandes/commandes.component */ "J0oq");
/* harmony import */ var _customers_pages_customer_home_client_components_panier_panier_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./customers-pages/customer-home/client/components/panier/panier.component */ "XPME");
/* harmony import */ var _customers_pages_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./customers-pages/customer-home/customer-home.component */ "3R/R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");






































const FireSession = [{ provide: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["PERSISTENCE"], useValue: 'local' }];
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["????defineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_26__["DatePipe"],
        FireSession,
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorage"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _lib_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _lib_primeng_lib_primeng_lib_module__WEBPACK_IMPORTED_MODULE_9__["PrimengLibModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthGuardModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _customers_pages_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_3__["AuthentificationComponent"],
        _customers_pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_5__["InscriptionComponent"],
        _customers_pages_inscription_inscription_marchand_inscription_marchand_component__WEBPACK_IMPORTED_MODULE_4__["InscriptionMarchandComponent"],
        _customers_pages_authentification_auth_marchand_auth_marchand_component__WEBPACK_IMPORTED_MODULE_15__["AuthMarchandComponent"],
        _customers_pages_customer_home_marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_16__["HomeMarchandComponent"],
        _admin_pages_gestion_green_repack_gestion_green_repack_component__WEBPACK_IMPORTED_MODULE_18__["GestionGreenRepackComponent"],
        _customers_pages_customer_home_marchand_components_suivi_demande_list_suivi_demande_list_component__WEBPACK_IMPORTED_MODULE_19__["SuiviDemandeListComponent"],
        _customers_pages_customer_home_marchand_components_ajout_produit_ajout_produit_component__WEBPACK_IMPORTED_MODULE_20__["AjoutProduitComponent"],
        _common_header_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
        _admin_pages_components_auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_25__["AuthDialogComponent"],
        _admin_pages_components_etat_gestion_demande_list_etat_gestion_demande_list_component__WEBPACK_IMPORTED_MODULE_27__["EtatGestionDemandeListComponent"],
        _admin_pages_components_demande_gestion_projetassos_demande_gestion_projetassos_component__WEBPACK_IMPORTED_MODULE_28__["DemandeGestionProjetassosComponent"],
        _customers_pages_inscription_inscription_client_inscription_client_component__WEBPACK_IMPORTED_MODULE_29__["InscriptionClientComponent"],
        _customers_pages_authentification_auth_client_auth_client_component__WEBPACK_IMPORTED_MODULE_30__["AuthClientComponent"],
        _customers_pages_customer_home_client_home_client_home_client_component__WEBPACK_IMPORTED_MODULE_31__["HomeClientComponent"],
        _customers_pages_customer_home_client_components_produits_achats_produits_achats_component__WEBPACK_IMPORTED_MODULE_32__["ProduitsAchatsComponent"],
        _customers_pages_customer_home_client_components_commandes_commandes_component__WEBPACK_IMPORTED_MODULE_33__["CommandesComponent"],
        _customers_pages_customer_home_client_components_panier_panier_component__WEBPACK_IMPORTED_MODULE_34__["PanierComponent"],
        _customers_pages_customer_home_customer_home_component__WEBPACK_IMPORTED_MODULE_35__["CustomerHomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _lib_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _lib_primeng_lib_primeng_lib_module__WEBPACK_IMPORTED_MODULE_9__["PrimengLibModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_12__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
        _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthGuardModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__["FileUploadModule"]] }); })();


/***/ }),

/***/ "aTUy":
/*!****************************************************************************************************!*\
  !*** ./src/app/customers-pages/inscription/inscription-marchand/inscription-marchand.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: InscriptionMarchandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionMarchandComponent", function() { return InscriptionMarchandComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_marchand_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/marchand.model */ "+iHr");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/common */ "EGxQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/marchand/marchand.service */ "OI+E");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function InscriptionMarchandComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r0.err_champs);
} }
function InscriptionMarchandComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.err_champs);
} }
function InscriptionMarchandComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r2.err_champs);
} }
function InscriptionMarchandComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r3.err_champs);
} }
function InscriptionMarchandComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r4.err_champs);
} }
function InscriptionMarchandComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r5.err_champs);
} }
function InscriptionMarchandComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r6.err_champs);
} }
class InscriptionMarchandComponent {
    constructor(fbuilder, marchandService, firebaseAuth, router) {
        this.fbuilder = fbuilder;
        this.marchandService = marchandService;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.marchand = new _model_marchand_model__WEBPACK_IMPORTED_MODULE_1__["MarchandViewModel"];
        this.err_champs = _common_common__WEBPACK_IMPORTED_MODULE_2__["CHAMP_INVALID_MSG"];
        this.err_send = '';
        this.marchandForm = this.fbuilder.group({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            voie: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            codepostal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ville: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            pswd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
            pswd2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
        });
        this.messageErreur = [
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' } //confirm mdp
        ];
    }
    ngOnInit() {
        this.marchandForm.valueChanges.subscribe(v => {
            //const {nom, email, voie, complement, codepostal, ville, pswd, pswd2} = v;
            console.log("nouveau marchand " + JSON.stringify(v));
            this.messageErreur[0].errMsg = this.marchandForm.controls.nom.touched && this.marchandForm.controls.nom.hasError ? _common_common__WEBPACK_IMPORTED_MODULE_2__["CHAMP_INVALID_MSG"] : '';
        });
    }
    updateNom() {
        this.marchandForm.controls.nom.valueChanges.subscribe(v => console.log("nouveau marchand " + v));
    }
    onSubmit() {
        const { nom, email, voie, complement, codepostal, ville, pswd, pswd2 } = this.marchandForm.value;
        let marchandModel = new _model_marchand_model__WEBPACK_IMPORTED_MODULE_1__["MarchandViewModel"]();
        Object.assign(marchandModel, {
            nom: nom,
            email: email,
            password: pswd,
            adresseModel: {
                voie: voie,
                complement: complement,
                codePostal: codepostal,
                ville: ville
            }
        });
        console.log('Marchand = ' + JSON.stringify(marchandModel) + ' type: ');
        if (pswd2 === pswd && pswd !== '') {
            this.err_send = '';
            //1: ajouter par api
            //2: si 1 ok, alors ajouter par firbase auth sign out
            let creaionMarchand = false;
            this.marchandService.createMarchand(marchandModel.createMarchand()).subscribe(data => {
                console.log('Marchand was create with ' + data.status);
                if (data.status === "SUCCES") {
                    this.firebaseAuth.createUserWithEmailAndPassword(email, pswd)
                        .then(rst => {
                        console.log("Inscription Marchand ..., work ");
                        this.router.navigate(['connexion']);
                    })
                        .catch(err => {
                        this.err_send = 'Erreur survenu !! /Donnee transmis sont erronn??es';
                        console.log('Inscription Marchand ..., failed');
                    });
                }
                else {
                    this.err_send = 'Les donnees transmis sont erronn??es';
                }
            });
        }
        else {
            this.err_send = _common_common__WEBPACK_IMPORTED_MODULE_2__["MDP_INVALID_MSG"];
        }
    }
}
InscriptionMarchandComponent.??fac = function InscriptionMarchandComponent_Factory(t) { return new (t || InscriptionMarchandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_marchand_marchand_service__WEBPACK_IMPORTED_MODULE_4__["MarchandService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
InscriptionMarchandComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: InscriptionMarchandComponent, selectors: [["app-inscription-marchand"]], decls: 69, vars: 10, consts: [[1, "sub-block", 3, "formGroup"], [1, "col-10", "field-block"], [1, "col"], ["for", "nom-field", 2, "margin-right", "1%"], ["formControlName", "nom", "id", "nom-field", "type", "text", 2, "width", "250px"], ["class", "col", 4, "ngIf"], ["for", "email-field", 2, "margin-right", "1%"], ["formControlName", "email", "id", "email-field", "type", "email", "formControleName", "email", 2, "width", "250px"], [2, "margin-right", "1%", "margin-bottom", "1%"], [1, "col-10", "adr-block"], ["for", "adresse1-field", 2, "margin-right", "1%"], ["formControlName", "voie", "id", "adresse1-field", "type", "text", 2, "width", "300px"], ["for", "adresse2-field", 2, "margin-right", "1%"], ["formControlName", "complement", "id", "adresse2-field", "type", "text", 2, "width", "300px"], ["for", "adresse3-field", 2, "margin-right", "1%"], ["formControlName", "codepostal", "id", "adresse3-field", "type", "text", 2, "width", "60px"], ["for", "adresse4-field", 2, "margin-right", "1%"], ["formControlName", "ville", "id", "adresse4-field", "type", "text", 2, "width", "170px"], ["for", "pasword-field", 2, "margin-right", "1%"], ["formControlName", "pswd", "id", "password-field", "type", "password", 2, "width", "200px"], ["for", "passwordConfirm-field", 2, "margin-right", "1%"], ["formControlName", "pswd2", "id", "passwordConfirm-field", "type", "password", 2, "width", "200px"], [1, "col", 2, "margin-top", "5%"], [1, "row"], ["type", "button", 1, "btn", "btn-primary", "active", 3, "disabled", "click"], ["id", "passwordConfirm-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "nom-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "email-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse1-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse3-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse4-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "password-field", 1, "p-error", 2, "margin-left", "9%"]], template: function InscriptionMarchandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Nom *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, InscriptionMarchandComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, " Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, InscriptionMarchandComponent_div_14_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Adresse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, " Voie: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, InscriptionMarchandComponent_div_25_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Compl\u00E9ment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "Code postal: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, InscriptionMarchandComponent_div_38_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "ville: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](45, InscriptionMarchandComponent_div_45_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Mot de passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](51, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](52, InscriptionMarchandComponent_div_52_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Confirmation *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](59, "mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](61, InscriptionMarchandComponent_div_61_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InscriptionMarchandComponent_Template_button_click_64_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "small", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.marchandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.nom.touched && ctx.marchandForm.controls.nom.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.email.touched && (ctx.marchandForm.controls.email.hasError("required") || ctx.marchandForm.controls.email.hasError("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.voie.touched && ctx.marchandForm.controls.voie.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.codepostal.touched && ctx.marchandForm.controls.codepostal.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.ville.touched && ctx.marchandForm.controls.ville.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.pswd.touched && ctx.marchandForm.controls.pswd.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.marchandForm.controls.pswd2.touched && ctx.marchandForm.controls.pswd2.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.marchandForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.err_send);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".sub-block[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-right: 10%;\n  margin-left: 10%;\n  margin-bottom: 2.5%;\n}\n\n.adr-block[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-bottom: 2%;\n}\n\n.field-block[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: red;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.annu-btn[_ngcontent-%COMP%] {\n  margin-right: 30%;\n}"] });


/***/ }),

/***/ "b2fQ":
/*!**************************************************!*\
  !*** ./src/app/service/client/client.service.ts ***!
  \**************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _assets_app_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/app-const */ "09dN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ClientService {
    constructor(http) {
        this.http = http;
    }
    add(client) {
        return this.http.post(_assets_app_const__WEBPACK_IMPORTED_MODULE_1__["CLIENT_CREATE"], { body: client }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            return res.status === 'SUCCES' ? true : false;
        }));
    }
    get(key, value) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        param = param.append(key, value);
        return this.http.get(_assets_app_const__WEBPACK_IMPORTED_MODULE_1__["CLIENT_GET"], { params: param })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            console.log('API_CLIENT_GET <= ' + JSON.stringify(res));
            return res.status === 'SUCCES' ? res.data : null;
        }));
    }
}
ClientService.??fac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ClientService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ClientService, factory: ClientService.??fac, providedIn: 'root' });


/***/ }),

/***/ "bGAv":
/*!*******************************************************************!*\
  !*** ./src/app/service/notifications/one-signal-notif.service.ts ***!
  \*******************************************************************/
/*! exports provided: OneSignalNotifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalNotifService", function() { return OneSignalNotifService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class OneSignalNotifService {
    constructor() { }
    onLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.OneSignal = window.OneSignal || [];
            return new Promise((resolve) => {
                window.OneSignal.push(function () {
                    resolve(window.OneSignal);
                });
            });
        });
    }
    onInit() {
        this.onLoad().then((OneSignal) => {
            OneSignal.init({
                appId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].onesignal_appId,
            });
        });
    }
    onUserCreate(idUser) {
        this.onLoad().then((OneSignal) => {
            OneSignal.setExternalUserId(idUser);
        });
    }
}
OneSignalNotifService.??fac = function OneSignalNotifService_Factory(t) { return new (t || OneSignalNotifService)(); };
OneSignalNotifService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: OneSignalNotifService, factory: OneSignalNotifService.??fac, providedIn: 'root' });


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    url_backend: "https://green-repack.herokuapp.com",
    firebaseConfig: {
        apiKey: "AIzaSyB9HiPcWV1NFEJG1d7hFUz-aJ6egMibNwk",
        authDomain: "green-repack-c4328.firebaseapp.com",
        databaseURL: "https://green-repack-c4328-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "green-repack-c4328",
        storageBucket: "green-repack-c4328.appspot.com",
        messagingSenderId: "848770591222",
        appId: "1:848770591222:web:1ec5e8b42a5e6ca4beffd7",
        measurementId: "G-BGFRLEFKTK"
    },
    onesignal_appId: "42ac6aa8-edc3-43dc-b1da-15670bdcd490",
    //onesignal_appId: "50655600-2a1d-4f7e-9c0d-19667fd49ec0", //localhost
    admin_mail: "green-repack@",
    admin_remboursement_static_link: "https://buy.stripe.com/test_6oE7vogCl76J8H66oo"
};


/***/ }),

/***/ "f17/":
/*!************************************************************************************************!*\
  !*** ./src/app/customers-pages/inscription/inscription-client/inscription-client.component.ts ***!
  \************************************************************************************************/
/*! exports provided: InscriptionClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionClientComponent", function() { return InscriptionClientComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/common */ "EGxQ");
/* harmony import */ var _model_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/client.model */ "olOJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _service_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/client/client.service */ "b2fQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function InscriptionClientComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r0.err_champs);
} }
function InscriptionClientComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.err_champs);
} }
function InscriptionClientComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r2.err_champs);
} }
function InscriptionClientComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r3.err_champs);
} }
function InscriptionClientComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r4.err_champs);
} }
function InscriptionClientComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r5.err_champs);
} }
function InscriptionClientComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r6.err_champs);
} }
function InscriptionClientComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r7.err_champs);
} }
class InscriptionClientComponent {
    constructor(fbuilder, firebaseAuth, clientService, router) {
        this.fbuilder = fbuilder;
        this.firebaseAuth = firebaseAuth;
        this.clientService = clientService;
        this.router = router;
        this.err_champs = _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"];
        this.err_send = '';
        this.clientForm = this.fbuilder.group({
            nom: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            prenom: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            voie: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            complement: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            codepostal: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            ville: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            pswd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
            pswd2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)]),
        });
        this.messageErreur = [
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' },
            { value: '', errMsg: '' } //confirm mdp
        ];
    }
    ngOnInit() {
        this.clientForm.valueChanges.subscribe(v => {
            //const {nom, email, voie, complement, codepostal, ville, pswd, pswd2} = v;
            console.log("nouveau client " + JSON.stringify(v));
            this.messageErreur[0].errMsg = this.clientForm.controls.nom.touched && this.clientForm.controls.nom.hasError('required') ? _common_common__WEBPACK_IMPORTED_MODULE_1__["CHAMP_INVALID_MSG"] : '';
        });
    }
    updateNom() {
        this.clientForm.controls.nom.valueChanges.subscribe(v => console.log("nouveau marchand " + v));
    }
    onSubmit() {
        const { nom, prenom, email, voie, complement, codepostal, ville, pswd, pswd2 } = this.clientForm.value;
        let model = new _model_client_model__WEBPACK_IMPORTED_MODULE_2__["ClientViewModel"]();
        Object.assign(model, {
            nom: nom,
            prenom: prenom,
            email: email,
            password: pswd,
            adresseModel: {
                voie: voie,
                complement: complement,
                codePostal: codepostal,
                ville: ville
            }
        });
        console.log('Client = ' + JSON.stringify(model));
        if (pswd2 === pswd && pswd !== '') {
            this.err_send = '';
            this.clientService.add(model.createClient()).subscribe(data => {
                if (data == true) {
                    this.err_send = '';
                    this.firebaseAuth.createUserWithEmailAndPassword(email, pswd)
                        .then(rst => {
                        console.log("Inscription client ..., work ");
                        this.router.navigate(['connexion']);
                    })
                        .catch(err => {
                        this.err_send = 'Erreur survenu !! /Donnee transmis sont erronn??es';
                        console.log('Inscription Marchand ..., failed');
                    });
                }
                else {
                    this.err_send = 'Les donnees transmis sont erronn??es';
                }
            });
        }
        else {
            this.err_send = _common_common__WEBPACK_IMPORTED_MODULE_1__["MDP_INVALID_MSG"];
        }
    }
}
InscriptionClientComponent.??fac = function InscriptionClientComponent_Factory(t) { return new (t || InscriptionClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_service_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
InscriptionClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: InscriptionClientComponent, selectors: [["app-inscription-client"]], decls: 76, vars: 11, consts: [[1, "sub-block", 3, "formGroup"], [1, "col-10", "field-block"], [1, "col"], ["for", "nom-field", 2, "margin-right", "1%"], ["formControlName", "nom", "id", "nom-field", "type", "text", 2, "width", "250px"], ["class", "col", 4, "ngIf"], ["formControlName", "prenom", "id", "prenom-field", "type", "text", 2, "width", "250px"], ["for", "email-field", 2, "margin-right", "1%"], ["formControlName", "email", "id", "email-field", "type", "email", "formControleName", "email", 2, "width", "250px"], [2, "margin-right", "1%", "margin-bottom", "1%"], [1, "col-10", "adr-block"], ["for", "adresse1-field", 2, "margin-right", "1%"], ["formControlName", "voie", "id", "adresse1-field", "type", "text", 2, "width", "300px"], ["for", "adresse2-field", 2, "margin-right", "1%"], ["formControlName", "complement", "id", "adresse2-field", "type", "text", 2, "width", "300px"], ["for", "adresse3-field", 2, "margin-right", "1%"], ["formControlName", "codepostal", "id", "adresse3-field", "type", "text", 2, "width", "60px"], ["for", "adresse4-field", 2, "margin-right", "1%"], ["formControlName", "ville", "id", "adresse4-field", "type", "text", 2, "width", "170px"], ["for", "pasword-field", 2, "margin-right", "1%"], ["formControlName", "pswd", "id", "password-field", "type", "password", 2, "width", "200px"], ["for", "passwordConfirm-field", 2, "margin-right", "1%"], ["formControlName", "pswd2", "id", "passwordConfirm-field", "type", "password", 2, "width", "200px"], [1, "col", 2, "margin-top", "5%"], [1, "row"], ["type", "button", 1, "btn", "btn-primary", "active", 3, "disabled", "click"], ["id", "passwordConfirm-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "nom-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "email-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse1-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse3-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "adresse4-field", 1, "p-error", 2, "margin-left", "9%"], ["id", "password-field", 1, "p-error", 2, "margin-left", "9%"]], template: function InscriptionClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Nom *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, InscriptionClientComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Prenom *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, InscriptionClientComponent_div_14_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, InscriptionClientComponent_div_21_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Adresse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, " Voie: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, InscriptionClientComponent_div_32_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, "Compl\u00E9ment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](43, "Code postal: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](45, InscriptionClientComponent_div_45_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](49, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "ville: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](52, InscriptionClientComponent_div_52_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Mot de passe *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](58, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](59, InscriptionClientComponent_div_59_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](63, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](64, "Confirmation *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](66, "mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](67, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](68, InscriptionClientComponent_div_68_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InscriptionClientComponent_Template_button_click_71_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Confirmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](74, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.clientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.nom.touched && ctx.clientForm.controls.nom.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.prenom.touched && ctx.clientForm.controls.prenom.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.email.touched && (ctx.clientForm.controls.email.hasError("required") || ctx.clientForm.controls.email.hasError("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.voie.touched && ctx.clientForm.controls.voie.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.codepostal.touched && ctx.clientForm.controls.codepostal.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.ville.touched && ctx.clientForm.controls.ville.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.pswd.touched && ctx.clientForm.controls.pswd.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.clientForm.controls.pswd2.touched && ctx.clientForm.controls.pswd2.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.clientForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.err_send);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".sub-block[_ngcontent-%COMP%] {\n  margin-top: 4%;\n  margin-right: 10%;\n  margin-left: 10%;\n  margin-bottom: 2.5%;\n}\n\n.adr-block[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-bottom: 2%;\n}\n\n.field-block[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: red;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.annu-btn[_ngcontent-%COMP%] {\n  margin-right: 30%;\n}"] });


/***/ }),

/***/ "fT/3":
/*!****************************************!*\
  !*** ./src/app/model/produit.model.ts ***!
  \****************************************/
/*! exports provided: EtatProduitData, EtatProduitEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatProduitData", function() { return EtatProduitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatProduitEnum", function() { return EtatProduitEnum; });
// produit marchand
class EtatProduitData {
    constructor(etat, step, label, hasContent, idProduit, niemeEchange) {
        this.etat = "NONE";
        this.label = "Suspendu";
        this.date_time = null;
        this.etat = etat;
        this.step = step;
        this.label = label;
        this.idProduit = idProduit;
        this.hasContent = hasContent;
        this.notification = '';
        this.notifDestinataire = '';
        this.niemeEchange = niemeEchange;
        this.expediteur = '';
        this.destinataire = '';
        if (!this.hasContent) {
            this.contenu = null;
        }
    }
    setDate(date) {
        this.date_time = date;
    }
}
const EtatProduitEnum = {
    NONE: { etat: 'NONE', steps: [-1], label: 'Suspendu', hasContent: false },
    INIT: { etat: 'INIT', steps: [0], label: 'Demande de session cr??er.', hasContent: false },
    EN_ATTENTE_REPONSE_: { etat: 'EN_ATTENTE_REPONSE_', steps: [1, 5], label: 'Demande en attente de r??ponse.', hasContent: true },
    DEMANDE_GENERATION_COLIS: { etat: 'DEMANDE_GENERATION_COLIS', steps: [2], label: 'Document pour colis en cours de cr??ation.', hasContent: true },
    EN_ATTENTE_RECEPTION_PRODUIT: { etat: 'EN_ATTENTE_RECEPTION_PRODUIT', steps: [3], label: 'En attente de r??ception du produit dans nos locaux.', hasContent: true },
    //PRODUIT_RECEPTIONNE: {etat:'PRODUIT_RECEPTIONNE', label:'Demande cr??er', hasContent:false},
    EN_ATTENTE_VALIDATION_: { etat: 'EN_ATTENTE_VALIDATION_', steps: [4], label: 'Demande en cours d\'expertise', hasContent: true },
    ANNULATION_EN_ATTENTE_REMBOURSEMENT: { etat: 'ANNULATION_EN_ATTENTE_REMBOURSEMENT', steps: [5, 6], label: 'En attente de remboursement ?? greenRepack pour les frais de gestion du produit.', hasContent: true },
    ANNULATION: { etat: 'ANNULATION', steps: [2, 4, 6, 7], label: 'Demande annul??e', hasContent: false },
    VALIDATION_EN_ATTENTE_PAIEMENT: { etat: 'VALIDATION_EN_ATTENTE_PAIEMENT', steps: [5, 6], label: 'En attente de paiement du produit au marchand', hasContent: true },
    VALIDATION: { etat: 'VALIDATION', steps: [6, 7], label: 'Demande valid??e', hasContent: false }
};


/***/ }),

/***/ "jbdk":
/*!**************************************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/client/components/produits-achats/produits-achats.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProduitsAchatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsAchatsComponent", function() { return ProduitsAchatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProduitsAchatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProduitsAchatsComponent.??fac = function ProduitsAchatsComponent_Factory(t) { return new (t || ProduitsAchatsComponent)(); };
ProduitsAchatsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProduitsAchatsComponent, selectors: [["app-produits-achats"]], decls: 2, vars: 0, template: function ProduitsAchatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "produits-achats works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ "nNHX":
/*!*************************************!*\
  !*** ./src/app/model/auth.model.ts ***!
  \*************************************/
/*! exports provided: MarchandProfils, ClientProfils, AssociationProfils, AdminProfils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarchandProfils", function() { return MarchandProfils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfils", function() { return ClientProfils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationProfils", function() { return AssociationProfils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfils", function() { return AdminProfils; });
class MarchandProfils {
    constructor() {
        this.type = 'MARCHAND';
    }
}
class ClientProfils {
    constructor() {
        this.type = 'CLIENT';
    }
}
class AssociationProfils {
    constructor() {
        this.type = 'ASSOCIATION';
    }
}
class AdminProfils {
    constructor() {
        this.type = 'GESTION';
    }
}


/***/ }),

/***/ "nWSw":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin-pages/components/demande-gestion-projetassos/demande-gestion-projetassos.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DemandeGestionProjetassosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandeGestionProjetassosComponent", function() { return DemandeGestionProjetassosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/auth.service */ "6uu6");
/* harmony import */ var _service_association_assos_projets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/association/assos-projets.service */ "DEn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function DemandeGestionProjetassosComponent_div_1_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemandeGestionProjetassosComponent_div_1_mat_form_field_1_mat_option_4_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const asso_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3); return ctx_r7.applyFiltre(asso_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const asso_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](asso_r6.nom);
} }
function DemandeGestionProjetassosComponent_div_1_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Choisir une association");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DemandeGestionProjetassosComponent_div_1_mat_form_field_1_mat_option_4_Template, 2, 1, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r3.assos);
} }
function DemandeGestionProjetassosComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-header", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-card-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemandeGestionProjetassosComponent_div_1_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const projetA_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.validation(projetA_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemandeGestionProjetassosComponent_div_1_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const projetA_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r12.validation(projetA_r9, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Refuser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const projetA_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", projetA_r9.nom, " - ", projetA_r9.projet.titre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Ajouter le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](7, 4, projetA_r9.projet.datecreate, "yyyy/MM/dd - HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", projetA_r9.projet.description, " ");
} }
function DemandeGestionProjetassosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DemandeGestionProjetassosComponent_div_1_mat_form_field_1_Template, 5, 1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DemandeGestionProjetassosComponent_div_1_div_2_Template, 15, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.assos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.projets);
} }
function DemandeGestionProjetassosComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Aucun Projet n'est en attente de validation !!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class DemandeGestionProjetassosComponent {
    constructor(authService, projetService) {
        this.authService = authService;
        this.projetService = projetService;
        this.assos = [];
        this.projets = [];
        this.selectCurrentAssos = {};
    }
    ngOnInit() {
        this.projetService.getAll(true).subscribe(prjs => {
            if (prjs.length !== 0) {
                prjs.forEach(a => {
                    if (!this.assos.find(e => e.nom === a.nom)) {
                        this.assos.push({ idassos: a.idassos, nom: a.nom });
                    }
                    this.projets.push(a);
                });
                this.selectCurrentAssos = this.assos[0];
                console.log("Selected assos: " + JSON.stringify(this.selectCurrentAssos));
            }
        });
    }
    applyFiltre(assos) {
        this.selectCurrentAssos = assos;
        console.log("Selected assos: " + JSON.stringify(this.selectCurrentAssos));
    }
    validation(project, valid) {
        const projectUpdate = {
            idproj: project.projet.idproj,
            statut: valid ? "VALIDER" : "REFUSER",
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
DemandeGestionProjetassosComponent.??fac = function DemandeGestionProjetassosComponent_Factory(t) { return new (t || DemandeGestionProjetassosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_association_assos_projets_service__WEBPACK_IMPORTED_MODULE_2__["AssosProjetsService"])); };
DemandeGestionProjetassosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DemandeGestionProjetassosComponent, selectors: [["app-demande-gestion-projetassos"]], decls: 5, vars: 2, consts: [[2, "margin-top", "3%", "margin-bottom", "3%"], [4, "ngIf", "ngIfElse"], ["emptyProject", ""], ["appearance", "fill", 4, "ngIf"], ["style", "margin-top:1%;margin-bottom:1%", 4, "ngFor", "ngForOf"], ["appearance", "fill"], ["defaultColor", "white"], ["defaultTabIndex", "1"], ["value", "asso.idassos", 3, "click", 4, "ngFor", "ngForOf"], ["value", "asso.idassos", 3, "click"], [2, "margin-top", "1%", "margin-bottom", "1%"], [2, "border", "solid black 1px", "margin-bottom", "1%"], [2, "background-color", "lightgrey", "padding", "1%"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DemandeGestionProjetassosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DemandeGestionProjetassosComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, DemandeGestionProjetassosComponent_ng_template_2_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.assos.length !== 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [""] });


/***/ }),

/***/ "olOJ":
/*!***************************************!*\
  !*** ./src/app/model/client.model.ts ***!
  \***************************************/
/*! exports provided: ClientViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientViewModel", function() { return ClientViewModel; });
class ClientViewModel {
    constructor() {
        this.adresseModel = {};
    }
    createClient() {
        let adr = '';
        adr += (this.adresseModel.complement !== '' ? this.adresseModel.complement + ', ' : '') + this.adresseModel.voie + ', '
            + this.adresseModel.codePostal + ' ' + this.adresseModel.ville;
        return { nom: this.nom, prenom: this.prenom, email: this.email, password: this.password, adresse: adr };
    }
}


/***/ }),

/***/ "uzoF":
/*!*************************************************!*\
  !*** ./src/app/model/workflow-produit.model.ts ***!
  \*************************************************/
/*! exports provided: genererNextEtatOfProduit, get_etat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genererNextEtatOfProduit", function() { return genererNextEtatOfProduit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_etat", function() { return get_etat; });
/* harmony import */ var _produit_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produit.model */ "fT/3");

function genererNextEtatOfProduit(prevState, idProduit, expediteurType, echangeNumero, etape, actionReponse, conditionParitculiere) {
    switch (prevState) {
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].NONE.etat:
            /**
             * cr??ation du produit par le marchand
             */
            let etatProduit = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].INIT.etat, 0, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].INIT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].INIT.hasContent, idProduit, echangeNumero);
            etatProduit.notification = 'Un demande de cession de produit ?? ??t?? ajouter !!'; //dest = admin.
            return etatProduit;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].INIT.etat:
            /**
             * 1ER Retour suite ?? la cr??ation du produit par le marchand
             */
            if (expediteurType === 'admin') {
                let etatProduit2 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.etat, 1, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
                etatProduit2.notification = 'Une demande de reponse est en attente de la part de la gestion !!'; //dest = vendeur
                etatProduit2.contenu = { prix: actionReponse.prix, raison: echangeNumero === 1 ? 'Premi??re de Offre de reprise !!' : actionReponse.raison };
                return etatProduit2;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.etat:
            const reponse = actionReponse;
            if (reponse === 'non' && echangeNumero === 1 && expediteurType === 'vendeur') {
                /**
                 * Refus marchand de l'offre.
                 */
                const etatProduit3 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.hasContent, idProduit, echangeNumero);
                etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est refus?? par le Marchand !!';
                return etatProduit3;
            }
            else if (reponse === 'non' && echangeNumero > 1 && expediteurType === 'vendeur') {
                /**
                 * Refus marchand de l'offre avec tentative r??cup??ration produit.
                 */
                const etatProduit3 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.hasContent, idProduit, echangeNumero);
                etatProduit3.contenu = 'remboursement';
                etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est refus?? par le Marchand !!'; //dest = admin
                return etatProduit3;
            }
            else if (reponse === 'oui' && echangeNumero === 1 && expediteurType === 'vendeur') {
                /**
                 * g??n??ration colismo pour evoie de colis
                 */
                const etatProduit3 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].DEMANDE_GENERATION_COLIS.etat, 2, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].DEMANDE_GENERATION_COLIS.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].DEMANDE_GENERATION_COLIS.hasContent, idProduit, echangeNumero);
                etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est accept?? par le Marchand !!'; //dest = admin
                etatProduit3.contenu = { type: 'colis' };
                return etatProduit3;
            }
            else if (reponse === 'oui' && echangeNumero > 1 && expediteurType === 'vendeur') {
                /**
                 *  validation marchand de l'offre
                 */
                const etatProduit3 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.hasContent, idProduit, echangeNumero);
                etatProduit3.notification = 'L\'offre ' + etatProduit3.niemeEchange + ' est accpt?? par le Marchand !!'; //dest = admin
                etatProduit3.contenu = 'paiement';
                return etatProduit3;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat:
            /**
            * Marchand remoursement pour r??cup??rtation produit.
            */
            if (expediteurType === 'vendeur') {
                const etatProduit4 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.hasContent, idProduit, echangeNumero);
                etatProduit4.notification = 'Le Marchand ?? payer pour r??cup??rer son colis !!';
                etatProduit4.contenu = null;
                return etatProduit4;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.etat:
            /**
            * Gestion greenn repack paiement du produit au marchand.
            */
            if (expediteurType === 'admin') {
                const etatProduit5 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION.hasContent, idProduit, echangeNumero);
                etatProduit5.notification = 'Le Marchand ?? payer pour r??cup??rer son colis !!'; //dest = "vendeur"
                etatProduit5.contenu = null;
                return etatProduit5;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].DEMANDE_GENERATION_COLIS.etat:
            /**
            * Suivi green repack de l'enoie du produit par green repack.
            */
            if (expediteurType === 'admin') {
                const etatProduit5 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_RECEPTION_PRODUIT.etat, 3, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_RECEPTION_PRODUIT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_RECEPTION_PRODUIT.hasContent, idProduit, echangeNumero);
                etatProduit5.notification = 'L\'etiquette pour l\'envoie du produit chez Green Repack!!'; //dest = "vendeur"
                etatProduit5.contenu = 'suivi_colis';
                return etatProduit5;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_RECEPTION_PRODUIT.etat:
            /**
            * Validation de r??cup??ration du colis par green repack si 15 jours de d??lais sont pas??s.
            * conditionParitculiere = date colismo - today < 15  && action = 'suivis_colis'
            *
            */
            if (expediteurType === 'admin' && conditionParitculiere) {
                const etatProduit6 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_VALIDATION_.etat, 4, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_VALIDATION_.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_VALIDATION_.hasContent, idProduit, echangeNumero);
                etatProduit6.notification = 'Le produit est en train d\'??tre verifier par nos expert !!'; //dest = "vendeur
                return etatProduit6;
            }
            else if (expediteurType === 'admin' && !conditionParitculiere) {
                /**
                 * Non Reception & hors d??lais du prodiuit
                 */
                const etatProduit6 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.etat, 4, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION.hasContent, idProduit, echangeNumero);
                etatProduit6.notification = 'Le d??lais de r??ception du produit ?? expir?? !!';
                return etatProduit6;
            }
            break;
        case _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_VALIDATION_.etat:
            if (expediteurType === 'admin' && echangeNumero > 1) {
                const action1 = actionReponse;
                const action2 = actionReponse;
                if (action1) {
                    const etatProduit7 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.etat, 5, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
                    etatProduit7.notification = 'Une nouvelle offre ?? ??t?? soumis !!'; //dest = "vendeur"
                    etatProduit7.contenu = action1;
                    return etatProduit7;
                }
                else if (action2 === 'oui') {
                    const etatProduit7 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_.hasContent, idProduit, echangeNumero);
                    etatProduit7.notification = 'Le produit ?? ??t?? valider, le paiment va ??tre effectu?? !!'; //dest = "vendeur"
                    etatProduit7.contenu = 'paiement';
                    return etatProduit7;
                }
                else if (action2 === 'non') {
                    const etatProduit7 = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT.hasContent, idProduit, echangeNumero);
                    etatProduit7.notification = 'Le produit ?? ??t?? valider, le paiment va ??tre effectu?? !!'; //dest = "vendeur"
                    etatProduit7.contenu = 'remboursement';
                    return etatProduit7;
                }
            }
            break;
        // case EtatProduitEnum.VALIDATION.etat:
        //   return prevState;
        // case EtatProduitEnum.ANNULATION.etat:
        //   return prevState;
        default:
            let etatProduit$ = new _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitData"](_produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].NONE.etat, etape, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].NONE.label, _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].NONE.hasContent, idProduit, echangeNumero);
            etatProduit$.notification = 'La demande en cours est suspendu !!'; //dest = admin.
            return etatProduit$;
    }
    return {};
}
function get_etat(type) {
    switch (type) {
        case 'INIT':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].INIT;
        case 'ANNULATION_EN_ATTENTE_REMBOURSEMENT':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION_EN_ATTENTE_REMBOURSEMENT;
        case 'DEMANDE_GENERATION_COLIS':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].DEMANDE_GENERATION_COLIS;
        case 'EN_ATTENTE_REPONSE_':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_REPONSE_;
        case 'EN_ATTENTE_VALIDATION_':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_VALIDATION_;
        case 'ANNULATION':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].ANNULATION;
        case 'VALIDATION_EN_ATTENTE_PAIEMENT':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION_EN_ATTENTE_PAIEMENT;
        case 'EN_ATTENTE_RECEPTION_PRODUIT':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].EN_ATTENTE_RECEPTION_PRODUIT;
        case 'VALIDATION':
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].VALIDATION;
        default:
            return _produit_model__WEBPACK_IMPORTED_MODULE_0__["EtatProduitEnum"].NONE;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: PROFIL_ROUTING, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFIL_ROUTING", function() { return PROFIL_ROUTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customers_pages_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers-pages/authentification/authentification.component */ "XEgj");
/* harmony import */ var _customers_pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-pages/inscription/inscription.component */ "VyAD");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _admin_pages_gestion_green_repack_gestion_green_repack_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-pages/gestion-green-repack/gestion-green-repack.component */ "FTRs");
/* harmony import */ var _customers_pages_customer_home_marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-pages/customer-home/marchand/home-marchand/home-marchand.component */ "Dgc0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const PROFIL_ROUTING = sessionStorage.getItem('PROFIL') !== null ? String(localStorage.getItem('PROFIL')) : 'user';
const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['connexion']);
const belongsToAccount = (next) => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["hasCustomClaim"])(`account-${next.params.id}`);
const adminOnly = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["hasCustomClaim"])('admin');
const clientRedirect = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['home']);
const clientOnly = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["hasCustomClaim"])('client');
const marchandOnly = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["hasCustomClaim"])('marchand');
const routes = [
    {
        path: 'connexion',
        component: _customers_pages_authentification_authentification_component__WEBPACK_IMPORTED_MODULE_1__["AuthentificationComponent"],
        canLoad: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
    },
    {
        path: 'inscription',
        component: _customers_pages_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__["InscriptionComponent"]
    },
    // {
    //   path: 'client',
    //   canLoad: [AngularFireAuthGuard],
    //   //canActivateChild: [AngularFireAuthGuard],
    //   //...canActivate(redirectUnauthorizedToLogin),
    //   children: [
    //     {
    //       path:':id',
    //       component: HomeClientComponent,
    //       //canLoad: [AngularFireAuthGuard],
    //       data: { authGuardPipe: belongsToAccount}
    //     },
    //     {
    //       path: '**',
    //       redirectTo:':id',
    //       pathMatch: 'full'
    //     }
    //   ]
    // },
    {
        path: 'home',
        //canLoad: [AngularFireAuthGuard],
        //...canActivate(redirectUnauthorizedToLogin),
        children: [
            {
                path: ':id',
                component: _customers_pages_customer_home_marchand_home_marchand_home_marchand_component__WEBPACK_IMPORTED_MODULE_5__["HomeMarchandComponent"],
                //dcanLoad: [AngularFireAuthGuard],
                data: { authGuardPipe: belongsToAccount }
            },
            {
                path: '**',
                redirectTo: ':id',
                pathMatch: 'full'
            }
        ]
    },
    // {
    //   path: 'client',
    //   canLoad: [AngularFireAuthGuard],
    //   component: HomeClientComponent,
    // },
    {
        path: 'admin',
        component: _admin_pages_gestion_green_repack_gestion_green_repack_component__WEBPACK_IMPORTED_MODULE_4__["GestionGreenRepackComponent"]
    },
    {
        path: 'admin',
        children: [
            {
                path: ':id',
                component: _admin_pages_gestion_green_repack_gestion_green_repack_component__WEBPACK_IMPORTED_MODULE_4__["GestionGreenRepackComponent"],
                canLoad: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
            },
            {
                path: '**',
                redirectTo: ':id',
                pathMatch: 'full',
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'connexion',
        //redirectTo: 'admin',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w9/1":
/*!*******************************************************************************************!*\
  !*** ./src/app/customers-pages/customer-home/client/home-client/home-client.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HomeClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeClientComponent", function() { return HomeClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class HomeClientComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.current_user = {};
        this.title = 'Espace client et achats';
        this.pageType = 'DEFAULT';
        this.pages = ['achats', 'panier', 'projets associatifs'];
    }
    ngOnInit() {
        //console.log("Profil en cours: " + this.authService.profilRegister);
        // this.authService.currentUser(new ClientProfils()).subscribe(rst => {
        //   if(rst && rst.uid){
        //     this.current_user = rst;
        //   // } else {
        //   //   this.redirect();
        //   }
        // });
    }
    redirect() {
        this.authService.forceLogout('connexion');
    }
}
HomeClientComponent.??fac = function HomeClientComponent_Factory(t) { return new (t || HomeClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeClientComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeClientComponent, selectors: [["app-home-client"]], decls: 24, vars: 11, consts: [[1, "container", "block"], [1, "col"], [1, "col", 2, "margin-right", "20px", "margin-left", "1150px"], [1, "btn", "btn-link", 3, "click"], [1, "nav", "justify-content-start-0", "tabs"], [1, "nav-item", 3, "click"], ["type", "button", "aria-current", "page", 1, "btn", "btn-link"], ["type", "button", 1, "btn", "btn-link"], [3, "ngSwitch"], ["ngSwitchCase", "'DEFAULT'"], ["ngSwitchCase", "'PAGE2'"], ["ngSwitchCase", "'PAGE3'"]], template: function HomeClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeClientComponent_Template_button_click_5_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Deconnexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeClientComponent_Template_li_click_8_listener() { return ctx.pageType = "DEFAULT"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeClientComponent_Template_li_click_11_listener() { return ctx.pageType = "PAGE2"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeClientComponent_Template_li_click_14_listener() { return ctx.pageType = "PAGE3"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " b ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("select", ctx.pageType === "DEFAULT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pages[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("select", ctx.pageType === "PAGE2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pages[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("select", ctx.pageType === "PAGE3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.pages[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngSwitch", ctx.pageType);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: [""] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);