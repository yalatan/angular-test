import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

export const simpleFadeAnimation = trigger("simpleFadeAnimation", [
  state("in", style({ opacity: 1 })),
  transition(":enter", [style({ opacity: 0 }), animate(500)]),
  transition(":leave", animate(500, style({ opacity: 0 }))),
]);
