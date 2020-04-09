const PROPERTY_NAME = '__CxjJFS_V-TINY-OUTSIDECLICK'
const HAS_WINDOWS = typeof window !== 'undefined'
const EVENT_NAME = 'click'

function bind(el, binding) {
  if (typeof binding.value !== 'function') {
    throw new Error('v-tyny-outsideclick: required call back function')
  }
  const cb = binding.value
  const handler = function(event) {
    // イベント発生したHTMLHtmlElementの取得
    // IE/Edgeだとevent.path event.composedPathは動かないらしい(https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath)
    // なのでevent.targetを使う。けどIE/Edgeが対応したなら消した方がよい
    const path = event.path || (event.composedPath && event.composedPath())
    const outsideCheck = path
      ? path.indexOf(el) < 0
      : !el.contains(event.target)
    if (outsideCheck) {
      cb(event)
    }
  }
  el[PROPERTY_NAME] = handler
  document.documentElement.addEventListener(EVENT_NAME, handler, false)
  // https://github.com/ndelvalle/v-click-outside/issues/137
  //   setTimeout(() => {
  //     document.documentElement.addEventListener(EVENT_NAME, handler, false)
  //   }, 0)
  //   console.log(el)
}

function unbind(el) {
  const handler = el[PROPERTY_NAME] || []
  document.documentElement.removeEventListener(EVENT_NAME, handler, false)
  delete el[PROPERTY_NAME]
}

// updateは無し

const directive = {
  bind,
  unbind,
}

export default HAS_WINDOWS ? directive : {}
