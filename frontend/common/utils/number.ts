/**
 * Форматирует число в строку с разделением по три знака.
 * @param numberValue Исходное число (может быть number или string).
 * @param locale Локаль (например, 'ru-RU' для России, 'en-US' для США).
 * Если не указано, используется локаль браузера/среды выполнения.
 * @returns Отформатированная строка.
 */
export const formatNumberWithSeparators = (numberValue: number | string, locale?: string): string => {
  const num = typeof numberValue === 'string' ? parseFloat(numberValue) : numberValue

  if (isNaN(num)) {
    return String(numberValue)
  }

  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    useGrouping: true,
  }).format(num)
}
