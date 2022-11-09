const spinerWraper = document.querySelector('.spiner-wraper');
const spinerEl = document.querySelector('.spiner');
const off = document.querySelector('.btn')
export function spinerOn() {
spinerWraper.classList.add('spiner-wraper-on');
  spinerEl.classList.add('spiner-visible', );
}
export function spinerOff() {
 
  spinerEl.classList.remove('.spiner-visible');
}


