findAndReplaceDOMText(document.body, {
  find: /\bSR-[0-9]{1,7}\b/ig,
  replace: function (portion, match) {
    if (portion.isEnd) {
      var text = portion.text;
      var span = document.createElement('span');
      span.appendChild(document.createTextNode(text));
      var a = document.createElement('a');
      a.href = 'https://bugs.swift.org/browse/' + match[0].toUpperCase();
      a.className = 'swift-autolink';
      span.appendChild(a);
      return span;
    } else {
      return portion.text;
    }
  },
});
