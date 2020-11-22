// For Disabling shortcuts
document.onkeydown = function (e) {
  return false;
};

function keyPress(key) {
  key.style.transform = 'scale(1)';
  key.style.transition = '0.2s';
}

function keyRelease(key) {
  key.style.transform = 'scale(1.1)';
  key.style.transition = '0.2s';
}

window.addEventListener('keydown', (event) => {
  console.log(event);
  switch (event.code) {
    case 'Backquote':
      keyPress(document.getElementById('Backquote'));
      break;
    case 'Digit1':
      keyPress(document.getElementById('Digit1'));
      break;
    case 'Digit2':
      keyPress(document.getElementById('Digit2'));
      break;
    case 'Digit3':
      keyPress(document.getElementById('Digit3'));
      break;
    case 'Digit4':
      keyPress(document.getElementById('Digit4'));
      break;
    case 'Digit5':
      keyPress(document.getElementById('Digit5'));
      break;
    case 'Digit6':
      keyPress(document.getElementById('Digit6'));
      break;
    case 'Digit7':
      keyPress(document.getElementById('Digit7'));
      break;
    case 'Digit8':
      keyPress(document.getElementById('Digit8'));
      break;
    case 'Digit9':
      keyPress(document.getElementById('Digit9'));
      break;
    case 'Digit0':
      keyPress(document.getElementById('Digit0'));
      break;
    case 'Minus':
      keyPress(document.getElementById('Minus'));
      break;
    case 'Equal':
      keyPress(document.getElementById('Equal'));
      break;
    case 'Backspace':
      keyPress(document.getElementById('Backspace'));
      break;
    case 'KeyQ':
      keyPress(q);
      break;
    case 'KeyW':
      keyPress(w);
      break;
    case 'KeyE':
      keyPress(e);
      break;
    case 'KeyR':
      keyPress(r);
      break;
    case 'KeyT':
      keyPress(t);
      break;
    case 'KeyY':
      keyPress(y);
      break;
    case 'KeyU':
      keyPress(u);
      break;
    case 'KeyI':
      keyPress(i);
      break;
    case 'KeyO':
      keyPress(o);
      break;
    case 'KeyP':
      keyPress(p);
      break;
    case 'KeyA':
      keyPress(a);
      break;
    case 'KeyS':
      keyPress(s);
      break;
    case 'KeyD':
      keyPress(d);
      break;
    case 'KeyF':
      keyPress(f);
      break;
    case 'KeyG':
      keyPress(g);
      break;
    case 'KeyH':
      keyPress(h);
      break;
    case 'KeyJ':
      keyPress(j);
      break;
    case 'KeyK':
      keyPress(k);
      break;
    case 'KeyL':
      keyPress(l);
      break;
    case 'KeyZ':
      keyPress(z);
      break;
    case 'KeyX':
      keyPress(x);
      break;
    case 'KeyC':
      keyPress(c);
      break;
    case 'KeyV':
      keyPress(v);
      break;
    case 'KeyB':
      keyPress(b);
      break;
    case 'KeyN':
      keyPress(n);
      break;
    case 'KeyM':
      keyPress(m);
      break;
    case 'Tab':
      keyPress(document.getElementById('Tab'));
      break;
    case 'CapsLock':
      keyPress(document.getElementById('CapsLock'));
      break;
    case 'ShiftLeft':
      keyPress(document.getElementById('ShiftLeft'));
      break;
    case 'ShiftRight':
      keyPress(document.getElementById('ShiftRight'));
      break;
    case 'ControlLeft':
      keyPress(document.getElementById('ControlLeft'));
      break;
    case 'MetaLeft':
      keyPress(document.getElementById('MetaLeft'));
      break;
    case 'AltLeft':
      keyPress(document.getElementById('AltLeft'));
      break;
    case 'Space':
      keyPress(document.getElementById('Space'));
      break;
    case 'AltRight':
      keyPress(document.getElementById('AltRight'));
      break;
    case 'ControlRight':
      keyPress(document.getElementById('ControlRight'));
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'Backquote':
      keyRelease(document.getElementById('Backquote'));
      break;
    case 'Digit1':
      keyRelease(document.getElementById('Digit1'));
      break;
    case 'Digit2':
      keyRelease(document.getElementById('Digit2'));
      break;
    case 'Digit3':
      keyRelease(document.getElementById('Digit3'));
      break;
    case 'Digit4':
      keyRelease(document.getElementById('Digit4'));
      break;
    case 'Digit5':
      keyRelease(document.getElementById('Digit5'));
      break;
    case 'Digit6':
      keyRelease(document.getElementById('Digit6'));
      break;
    case 'Digit7':
      keyRelease(document.getElementById('Digit7'));
      break;
    case 'Digit8':
      keyRelease(document.getElementById('Digit8'));
      break;
    case 'Digit9':
      keyRelease(document.getElementById('Digit9'));
      break;
    case 'Digit0':
      keyRelease(document.getElementById('Digit0'));
      break;
    case 'Minus':
      keyRelease(document.getElementById('Minus'));
      break;
    case 'Equal':
      keyRelease(document.getElementById('Equal'));
      break;
    case 'Backspace':
      keyRelease(document.getElementById('Backspace'));
      break;
    case 'KeyQ':
      keyRelease(q);
      break;
    case 'KeyW':
      keyRelease(w);
      break;
    case 'KeyE':
      keyRelease(e);
      break;
    case 'KeyR':
      keyRelease(r);
      break;
    case 'KeyT':
      keyRelease(t);
      break;
    case 'KeyY':
      keyRelease(y);
      break;
    case 'KeyU':
      keyRelease(u);
      break;
    case 'KeyI':
      keyRelease(i);
      break;
    case 'KeyO':
      keyRelease(o);
      break;
    case 'KeyP':
      keyRelease(p);
      break;
    case 'KeyA':
      keyRelease(a);
      break;
    case 'KeyS':
      keyRelease(s);
      break;
    case 'KeyD':
      keyRelease(d);
      break;
    case 'KeyF':
      keyRelease(f);
      break;
    case 'KeyG':
      keyRelease(g);
      break;
    case 'KeyH':
      keyRelease(h);
      break;
    case 'KeyJ':
      keyRelease(j);
      break;
    case 'KeyK':
      keyRelease(k);
      break;
    case 'KeyL':
      keyRelease(l);
      break;
    case 'KeyZ':
      keyRelease(z);
      break;
    case 'KeyX':
      keyRelease(x);
      break;
    case 'KeyC':
      keyRelease(c);
      break;
    case 'KeyV':
      keyRelease(v);
      break;
    case 'KeyB':
      keyRelease(b);
      break;
    case 'KeyN':
      keyRelease(n);
      break;
    case 'KeyM':
      keyRelease(m);
      break;
    case 'Tab':
      keyRelease(document.getElementById('Tab'));
      break;
    case 'CapsLock':
      keyRelease(document.getElementById('CapsLock'));
      break;
    case 'ShiftLeft':
      keyRelease(document.getElementById('ShiftLeft'));
      break;
    case 'ShiftRight':
      keyRelease(document.getElementById('ShiftRight'));
      break;
    case 'ControlLeft':
      keyRelease(document.getElementById('ControlLeft'));
      break;
    case 'MetaLeft':
      keyRelease(document.getElementById('MetaLeft'));
      break;
    case 'AltLeft':
      keyRelease(document.getElementById('AltLeft'));
      break;
    case 'Space':
      keyRelease(document.getElementById('Space'));
      break;
    case 'AltRight':
      keyRelease(document.getElementById('AltRight'));
      break;
    case 'ControlRight':
      keyRelease(document.getElementById('ControlRight'));
      break;
  }
});
