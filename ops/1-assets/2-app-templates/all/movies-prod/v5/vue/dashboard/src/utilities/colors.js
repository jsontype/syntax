// color mix function
export const colorMix = (color1, color2, weight) => {
  function d2h(d) {
    return d.toString(16)
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16)
  } // convert a hex value to decimal
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  let color = '#'
  for (let i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairsâ€”red, green, and blue
    const v1 = h2d(color1.substr(i, 2)) // extract the current pairs
    const v2 = h2d(color2.substr(i, 2))
    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)))

    while (val.length < 2) {
      val = '0' + val
    } // prepend a '0' if val results in a single digit

    color += val // concatenate val to our new color string
  }

  return color // PROFIT!
}

// tint color function
export const tintColor = (color, weight) => {
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  const color1 = color.substr(1) // strip the '#' character from the beginning
  const color2 = 'FFFFFF'
  return colorMix(color2, color1, weight)
}

// shade color function
export const shadeColor = (color, weight) => {
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  const color1 = color.substr(1) // strip the '#' character from the beginning
  const color2 = '000000'
  return colorMix(color2, color1, weight)
}

// color hex to rgb function
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}

// get color shade & tint Functions
export const getColorShadeTint = (color, value) => {
  let colors = {}
  const style = document.createElement('style')
  style.setAttribute('class', 'custom-color')
  style.innerHTML = `
            [data-bs-theme-color="custom"] {
                ${color}: ${value};
                ${color}-rgb: ${hexToRgb(value)};
                ${color}-bg-subtle: ${tintColor(value, 80)};
                ${color}-border-subtle: var(${color}-bg-subtle);
                --bs-link-color-rgb: var(${color}-rgb);
                ${color}-hover-bg: ${shadeColor(value, 20)};
                ${color}-hover-border: ${shadeColor(value, 30)};
                ${color}-active-bg: ${shadeColor(value, 20)};
                ${color}-active-border: ${shadeColor(value, 30)};
            }
            [data-bs-theme-color="custom"][data-bs-theme="dark"] {
                ${color}-text-emphasis:  ${tintColor(value, 40)};
                ${color}-bg-subtle:  ${shadeColor(value, 80)};
              }
        `
  document.head.appendChild(style)
  return colors
}
