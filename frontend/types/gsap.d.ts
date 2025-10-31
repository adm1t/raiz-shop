import type { gsap } from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ScrollSmoother } from 'gsap/ScrollSmoother'

declare module '#app' {
  interface NuxtApp {
    readonly $gsap: typeof gsap
    readonly $ScrollTrigger: typeof ScrollTrigger
    readonly $ScrollSmoother: typeof ScrollSmoother
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $gsap: typeof gsap
    readonly $ScrollTrigger: typeof ScrollTrigger
    readonly $ScrollSmoother: typeof ScrollSmoother
  }
}
