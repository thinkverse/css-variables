const CSS = document.querySelector('link[id="css-theme"]')
const DEFAULT_THEME = './css/default.css'

let CURRENT_THEME = CSS.href

function changeTheme(event) {
  switchTheme(event.srcElement.dataset.theme ?? CURRENT_THEME)
}

function switchTheme(theme) {
  if (theme != CURRENT_THEME) {
    CURRENT_THEME = theme
    return CSS.href = theme
  }

  CURRENT_THEME = DEFAULT_THEME
  CSS.href = DEFAULT_THEME
}