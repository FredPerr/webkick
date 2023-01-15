export default function mediaQuery(
  size: string,
  direction: 'min' | 'max' = 'min',
) {
  return `@media screen and (${
    direction === 'max' ? 'max' : 'min'
  }-width: ${size})`
}
