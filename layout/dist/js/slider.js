class Slider {
  constructor(currentSlideIndex, element, imgLength) {
    this.currentSlideIndex = currentSlideIndex;
    this.element = element;
    this.imgLength = imgLength;
    this.insertSlide();
  }
  insertSlide() {
    const image = document.createElement('img');
    this.image = this.element.appendChild(image);
  }
  showSlide()  {
    this.image.src = 'slide' + this.currentSlideIndex + '.jpg';
    this.currentSlideIndex++;
    if (this.currentSlideIndex === this.imgLength+1)
      this.currentSlideIndex = 1;
  }
  startLoop() {
    this.timer = setInterval( () => { this.showSlide('right'); }, 2000);
    console.log('slider timer', this.timer);
  }
  stopLoop() {
    clearInterval(this.timer);
  }
}

class Slider1 extends Slider {
  constructor(currentSlideIndex, element, imgLength){
    super(currentSlideIndex, element, imgLength);
    this.insertTitle();
  }
  insertTitle() {
    const title = document.createElement('span');
    this.element.style.position = 'relative';
    title.style.position = 'absolute';
    title.style.top = '50%';
    title.style.left = '50%';
    title.style.transform = 'translate(-50%, -50%)';
    title.style.color = '#fff';
    title.style.fontSize = '20px'
    this.title = this.element.appendChild(title);
  }
  startLoop() {
    this.title.innerText = '';
    this.timer = setInterval( () => { this.showSlide();  }, 2000);
    console.log('slider1timer', this.timer);
  }
  showTitle() {
    this.title.innerText = this.image.src.slice(-10, -4);
  }
  stopLoop() {
    clearInterval(this.timer);
    this.showTitle();
  }
}

const target1 = document.getElementById('slider1');
const sliderButton1 = document.getElementById('slider-btn-1');
const slider1 = new Slider1(1, target1, 4);

class Slider2 extends Slider {
  constructor(currentSlideIndex, element, imgLength){
    super(currentSlideIndex, element, imgLength);
    this.element.style.position = 'relative';
    this.insertArrowPrev();
    this.insertArrowNext();
    this.insertIndicators();
  }
  insertArrowPrev() {
    const prev = document.createElement('span');
    this.prev = this.element.appendChild(prev);
    this.prev.className = 'nav-prev';
    this.prev.id = 'nav-prev';
    this.prev.addEventListener('click', e => {
      this.showSlide('left');
      this.stopLoop();
    });
  }
  insertArrowNext() {
    const next = document.createElement('span');
    this.next = this.element.appendChild(next);
    this.next.className = 'nav-next';
    this.next.id = 'nav-next';
    this.next.addEventListener('click', e => {
      this.showSlide();
      this.stopLoop();
    });
  }
  showSlide(direction) {
    let removedIndex;
    if(direction === 'left') {
      removedIndex = (this.currentSlideIndex === this.imgLength) ? 0 : this.currentSlideIndex;
    }
    else {
      removedIndex = (this.currentSlideIndex === 1) ? this.imgLength-1 : this.currentSlideIndex-2;
    }

    this.ul.childNodes[removedIndex].classList.remove('active'); 
    this.ul.childNodes[this.currentSlideIndex-1].classList.add('active'); 
    this.image.src = 'slide' + this.currentSlideIndex + '.jpg';

    if(direction === 'left')
      this.currentSlideIndex === 1 ? this.currentSlideIndex = this.imgLength : this.currentSlideIndex--;
    else
      this.currentSlideIndex === this.imgLength ? this.currentSlideIndex = 1 : this.currentSlideIndex++;
  }
  
  insertIndicators(){
    const fragment = document.createDocumentFragment();
    this.ul = document.createElement('ul');
    this.ul.style.maxWidth = '100px';
    this.ul.style.margin = '0 auto';
    this.ul.style.position = 'absolute';
    this.ul.style.bottom = '-10px';
    this.ul.style.left = '40%';
    fragment.appendChild(this.ul);
    let indicators = new Array(this.imgLength);
    for (let indicatorItem = 0; indicatorItem < this.imgLength; indicatorItem++ ) {
      const li = document.createElement('li');
      li.innerHtml = indicatorItem;
      this.ul.appendChild(li);
      li.className = 'indicators';
    }
    this.element.appendChild(fragment);
  }
}
const target2 = document.getElementById('slider2');
const sliderButton2 = document.getElementById('slider-btn-2');
const slider2 = new Slider2(1, target2, 4);


sliderButton1.addEventListener('click', e => {
  slider1.startLoop();
  target1.addEventListener('mouseover', e => {
    slider1.stopLoop();
  });
  target1.addEventListener('mouseleave', e => {
    slider1.startLoop();
  });
})

sliderButton2.addEventListener('click', e => {
  slider2.startLoop();
});



