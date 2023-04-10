browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'copyToClipboard') {
    navigator.clipboard.writeText(message.text)
      .then(() => {
        console.log('Text copied to clipboard:', message.text);
      })
      .catch(err => {
        console.error('Error copying text to clipboard:', err);
      });
  }
});

