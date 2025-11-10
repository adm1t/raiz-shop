import { formatNumberWithSeparators } from './number'

export const getFormattedPrice = (price: number) => {
  return `${formatNumberWithSeparators(price, 'ru-RU')} ₽`
}
