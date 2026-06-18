import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

/** Returns to the ajustadorhn parent form from a segment sub-page. */
export async function returnToAjustadorhnParent(
  navCtrl: NavController,
  router: Router
): Promise<void> {
  const didNav = await navCtrl.navigateBack('/ajustadorhn');

  if (!didNav) {
    await router.navigate(['/ajustadorhn'], { replaceUrl: true });
  }
}
