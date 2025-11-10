import { BREAKPOINT_DESKTOP_MIN, BREAKPOINT_MOBILE_MAX } from '../variables'

export function useScreen() {
  const isMobile = ref(false)
  const isDesktop = ref(true)

  const mobileQuery = window?.matchMedia(`(max-width: ${BREAKPOINT_MOBILE_MAX}px)`)
  const desktopQuery = window?.matchMedia(`(min-width: ${BREAKPOINT_DESKTOP_MIN}px)`)

  const updateDeviceState = () => {
    isMobile.value = mobileQuery?.matches
    isDesktop.value = desktopQuery?.matches
  }

  updateDeviceState()

  mobileQuery?.addEventListener('change', updateDeviceState)
  desktopQuery?.addEventListener('change', updateDeviceState)

  onBeforeUnmount(() => {
    mobileQuery?.removeEventListener('change', updateDeviceState)
    desktopQuery?.removeEventListener('change', updateDeviceState)
  })

  return {
    isMobile,
    isDesktop,
  }
}
