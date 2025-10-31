import type { HookResult } from '@nuxt/schema'

declare module '#app' {
  interface RuntimeNuxtHooks {
    'content:resize': () => HookResult
  }
}
