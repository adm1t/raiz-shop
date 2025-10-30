export function useScreen() {
  const isMobile = ref(false)
  const isDesktop = ref(true)

  const mobileQuery = window?.matchMedia('(max-width: 991.98px)')
  const desktopQuery = window?.matchMedia('(min-width: 992px)')

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
