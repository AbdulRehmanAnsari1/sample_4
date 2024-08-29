import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Steps2 } from './steps2/steps2.component'
import { Navbar8 } from './navbar8/navbar8.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Contact10 } from './contact10/contact10.component'
import { Footer4 } from './footer4/footer4.component'
import { CTA26 } from './cta26/cta26.component'
import { Features24 } from './features24/features24.component'
import { Features25 } from './features25/features25.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'
import { Hero17 } from './hero17/hero17.component'

@NgModule({
  declarations: [
    Steps2,
    Navbar8,
    Pricing14,
    Contact10,
    Footer4,
    CTA26,
    Features24,
    Features25,
    Testimonial17,
    Hero17,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Steps2,
    Navbar8,
    Pricing14,
    Contact10,
    Footer4,
    CTA26,
    Features24,
    Features25,
    Testimonial17,
    Hero17,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
