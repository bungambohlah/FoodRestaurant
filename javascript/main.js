function hideScroll(e) {
  const elms = document.getElementsByClassName("icon-scroll")
  if (elms && elms.length) {
    for (let i = 0; i<elms.length; i++) {
      const elm = elms[i]
      if (elm) {
        elm.style.display = 'none'
      }
    }
  }
}