import { useRuntimeConfig } from '#app'

export function getFullImageUrl(relativePath: string): string {
  const runtimeConfig = useRuntimeConfig()
  const base = runtimeConfig.public.baseURL || '/'

  if (!relativePath.startsWith('/') && !relativePath.startsWith(base)) {
    relativePath = `/${relativePath}`
  }

  const fullPath = base.endsWith('/') ? `${base}${relativePath.startsWith('/') ? relativePath.substring(1) : relativePath}` : `${base}${relativePath}`

  return fullPath
}
