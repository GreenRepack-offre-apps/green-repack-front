import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private readonly router: Router) { }

  navigate(url:string){
    this.router.navigate([url])
    .then(u => console.log('#NAV => '+this.router.url))
    .catch(err => console.log('[ERROR] #NAV => '+err));
  }

  currentUrl(){
    return this.router.url;
  }
}
