module.exports = function ($) {
  var element = $('#__VIEWSTATE')
  if (element.length === 0) {
    return null
  }
  var val = element.attr('value')
  return val
}
