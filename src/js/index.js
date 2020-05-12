// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
//
window.onload = function () {
  let d = document
  let items = d.querySelector('.items')
  let input = d.querySelector('.dropDownExpand')
  input.addEventListener('click',() => {
    items.classList.toggle('hidden')
  })
    // items.classList.toggle('hidden'))
}
