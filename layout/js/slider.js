class Slider {
  constructor(currentSlideIndex, element) {
    this.currentSlideIndex = currentSlideIndex;
    this.element = element;
    this.insertSlide();
  }

  insertSlide() {
    const image = document.createElement('img');
    this.image = this.element.appendChild(image);
  }

  showSlide()  {
    this.image.src = 'slide' + this.currentSlideIndex + '.jpg';
    this.currentSlideIndex++;
    if (this.currentSlideIndex === 5)
      this.currentSlideIndex = 1;
  }

  startLoop() {
    this.timer = setInterval( () => { this.showSlide(); }, 2000);
  }
}

const target = document.getElementById('slider');
const sliderButton = document.getElementById('slider-btn');
const slider = new Slider(1, target);


class Slider2 extends Slider {
  constructor(currentSlideIndex, element){
    super(currentSlideIndex, element);
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
    this.title.innerText = "";
    this.timer = setInterval( () => { this.showSlide();  }, 2000);
  }
  
  showTitle() {
    this.title.innerText = this.image.src.slice(-10, -4);
  }
  stopLoop() {
    clearInterval(this.timer);
    this.showTitle();
  }

}
const target2 = document.getElementById('slider2');
const slider2 = new Slider2(1, target2);

sliderButton.addEventListener('click', e => {
  slider.startLoop();
  slider2.startLoop();
})

target2.addEventListener('mouseover', e => {
  slider2.stopLoop();
});

target2.addEventListener('mouseleave', e => {
  slider2.startLoop();
});


