export function copy(copyText, successCallback) {
  doCopy(copyText);
  if (successCallback) {
    successCallback();
  }
}

function doCopy(copyText) {
  const element = createTextAreaElement(copyText);
  document.body.appendChild(element);
  element.select();
  element.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand('copy');
  document.body.removeChild(element);
}

function createTextAreaElement(copyText) {
  const element = document.createElement('textarea');
  element.value = copyText;
  return element;
}
