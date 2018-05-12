'use strict';

const _path = require('path');

module.exports = Franz => {
  debugger;
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.CxUIE, .unread');
    let count = 0;

    for (let i = 0; i < elements.length; i += 1) {
      if (elements[i].querySelectorAll('*[data-icon="muted"]').length === 0) {
        count += 1;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // inject franz.css stylesheet

  const service = _path.join(__dirname, 'service.css');
  const dark = _path.join(__dirname, 'dark.css');
  Franz.injectCSS(service, dark);

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};