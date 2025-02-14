const toUpperCamelCase = (string) => {
  return string
    .toLowerCase()
    .split('-')
    .map((it) => it.charAt(0).toUpperCase() + it.substring(1))
    .join('')
}
exports.toUpperCamelCase = toUpperCamelCase
