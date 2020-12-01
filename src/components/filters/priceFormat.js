export default function priceFormat(value) {
  value = Number(value)
  return Intl.NumberFormat("ru").format(value) + '\u00A0₽'
}