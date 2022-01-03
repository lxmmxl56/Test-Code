'use strict';

const out = document.querySelector('#console');

function logger(string) {
  const currOut = out.innerHTML
  out.innerHTML = `${currOut}<br>${string}`;
}

logger('🌭');
