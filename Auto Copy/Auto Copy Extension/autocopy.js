document.addEventListener('selectionchange', () => {
  const selection = document.getSelection();
  const selectedText = selection.toString();

  if (selectedText) {
    browser.runtime.sendMessage({
      type: 'copyToClipboard',
      text: selectedText
    });
  }
});
