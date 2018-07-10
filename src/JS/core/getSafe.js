export const getSafe = function (fn) {
  try {
    return fn()
  } catch (e) {
    return undefined
  }
}
