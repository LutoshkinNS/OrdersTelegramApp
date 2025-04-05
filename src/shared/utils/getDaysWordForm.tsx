/**
 * Возвращает правильную форму слова "день" в зависимости от числа
 * @param days - количество дней
 * @returns "день", "дня" или "дней"
 */
export function getDayWordForm(days: number): string {
  const lastDigit = days % 10;
  const lastTwoDigits = days % 100;

  // Исключения для чисел 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "дней";
  }

  // Для остальных случаев
  switch (lastDigit) {
    case 1:
      return "день";
    case 2:
    case 3:
    case 4:
      return "дня";
    default:
      return "дней";
  }
}