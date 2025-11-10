export interface ButtonProps {
  /**
   * Имя иконки.
   *
   * @default ''null''
   */
  icon?: string

  /**
   * Неактивное состояние кнопки.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Принудительная активация режима кнопки с иконкой.
   *
   * @default false
   */
  onlyIcon?: boolean

  /**
   * Адрес ссылки (внутренней или внешней).
   *
   * @default ''
   */
  to?: string

  /**
   * Цветовая тема
   */
  theme?: 'primary' | 'secondary'
}
