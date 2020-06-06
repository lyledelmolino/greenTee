import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimationsxyz', [
    transition('* <=> *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], {optional: true}),
      query(':enter', [
        style({left: '-100%'})
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ]);

export const slider =
  trigger('routeAnimations', [
    transition(('home => *'), slide('left')),
    transition(('home => find-golfer'), slide('right')),
    transition(('register-free-user => *'), slide('left')),
    transition(('* => register-free-user'), slide('left')),
    transition(('about => *'), slide('left')),
    transition(('scoring => *'), slide('left')),
    transition(('* => scoring'), slide('left')),
    transition(('profile => *'), slide('left')),
    transition(('* => profile'), slide('left')),
    transition(('privacy-policy => *'), slide('right')),
    transition(('find-golfer => *'), slide('right')),
    transition(('login => *'), slide('right')),
  ]);

function slide(direction) {
  const optional = {optional: true};
// debugger;
  console.log('slideIn -> direction: ' + direction);
  return [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], {optional: true}),
    query(':enter', [
      style({[direction]: '-100%'})
    ], {optional: true}),
    group([
      query(':leave', [
        animate('100ms ease-out', style({[direction]: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({[direction]: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild(), {optional: true}),
  ];
}
