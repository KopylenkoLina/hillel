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
    // console.log(this.currentSlideIndex);
    this.image.src = 'images/slide' + this.currentSlideIndex + '.jpg';
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

sliderButton.addEventListener('click', e => {
  slider.startLoop();
  slider2.startLoop();
})

class Slider2 extends Slider {

  // startLoop(){
  //   super.startLoop();
  //   this.timer = setInterval( () => { this.showSlide(); }, 1000);
  // }

  stopLoop() {
    clearInterval(this.timer);
  }
}

const slider2 = new Slider2(1, target);




target.addEventListener('mouseover', e => {
  slider2.stopLoop();
  
});

target.addEventListener('mouseleave', e => {
  slider2.startLoop();
});


