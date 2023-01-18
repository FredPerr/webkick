export function formatHexColors(hexColors: string[]) {
  return hexColors
    .map((hex) => {
      //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.
      if (4 === hex.length) {
        const hexTemp = hex
          .substr(1)
          .split('')
          .map((hexTemp) => hexTemp + hexTemp)
          .join('')
        hex = `#${hexTemp}`
      }
      return hex && `0x${hex.substr(1)}`
    })
    .filter(Boolean)
    .map(normalizeColor)
}

function normalizeColor(hexCode: any) {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255,
  ]
}
