$(function() {
  window.keydown = {};
  window.keybuff = "";
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }

  $(document).bind("keydown", function(event) {
	c = keyName(event);
    keydown[c] = true;
	if (c == 'backspace')
		keybuff = keybuff.slice(0,-1);
    else if (c.length == 1)
		keybuff += c;
  });

  $(document).bind("keyup", function(event) {
		c = keyName(event);
		keydown[c] = false;
  });
});
