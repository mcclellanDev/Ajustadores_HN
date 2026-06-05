import { AnimationController } from '@ionic/angular';

export const topModalLeaveAnimation = (baseEl: HTMLElement): any => {
  (document.activeElement as HTMLElement | null)?.blur(); // 👈 Esto ayuda

  const animationCtrl = new AnimationController();

  const backdropAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 'var(--backdrop-opacity)', '0');

  const wrapperAnimation = animationCtrl.create()
    .addElement(baseEl.querySelector('.modal-wrapper')!)
    .keyframes([
      { offset: 0, opacity: '1', transform: 'translateY(0)' },
      { offset: 1, opacity: '0', transform: 'translateY(-100%)' }
    ]);

  return animationCtrl.create()
    .addElement(baseEl)
    .easing('ease-in-out')
    .duration(300)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};