import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestComponent } from '../test/test.component';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<TestComponent> {

  canDeactivate(
    component: TestComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    if(component.name !="")
    {
      return window.confirm("There is some unsaved data. Do you really want to navigate ?")
    }
    else 
    return true;
  }
  
}
