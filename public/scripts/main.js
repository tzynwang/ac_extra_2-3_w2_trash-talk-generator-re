const copyButton = document.querySelector('#copyButton')
const sentence = document.querySelector('#sentence')

copyButton.addEventListener('click', () => {
  sentence.select()
  sentence.setSelectionRange(0, 99999) /* For mobile devices */
  document.execCommand('copy')
  window.alert(`
  已複製幹話😏
  → ${sentence.value} ←
  `)
})
