
export default function (text) {
  const divEl = document.createElement('div');
  divEl.classList.add('main')
  divEl.innerText = text;

  document.body.appendChild(divEl);
}

export function walk() {
  
}