domFragmentFrom = function(htmlString){
  var containerElement = document.createElement('div');
  containerElement.innerHTML = htmlString;
  return containerElement.textContent;
}