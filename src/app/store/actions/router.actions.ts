import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


const goToRoute = '[router] go';
const back = '[router] back';

interface GoToRoute {
  path: any[],
  query?: Object,
  extras?: NavigationExtras
}

export const GoToRouteAction = createAction(
  goToRoute,
  props<{ payload: GoToRoute }>()
);

export const BackAction = createAction(
  back
);
