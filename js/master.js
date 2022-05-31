
// Splash Screen
let btnControl = document.querySelector('.control-buttons span')
    mainBkg = document.querySelector('.control-buttons'),
    infoName = document.querySelector('.info-name span');


btnControl.onclick = () => {

  let yourName = prompt("What's your name?");

  if (yourName == '' || yourName == null) {
    infoName.textContent = 'Guest'
  }else {
    infoName.textContent = yourName;
  }

  mainBkg.remove();

}


// Cards properties
let blocksContainer = document.querySelector('.game-blocks-container'),
    blocks = Array.from(blocksContainer.children),
    orderRange = [...Array(blocks.length).keys()],
    // orderRange = Array.from(Array(blocks.length).keys()),
    duration = 1000;


shuffle(orderRange)

// CSS property
blocks.forEach((block, index) => {

  block.style.order = orderRange[index];

  // add click event
  block.addEventListener('click', function () {

    // Trigger the flip block function
    flipBlock(block)

    // Collect all flipped card
    let allFlippedBlocks = blocks.filter( (flipedBlock) => flipedBlock.classList.contains('flipped'));

    // if there two selected Blocks
    if (allFlippedBlocks.length === 2) {

      // Stop clicking function
      stopClicking()

      // check matched block function
      matchedBlock(allFlippedBlocks[0] , allFlippedBlocks[1])

    }

  })
});


// Flip block function
let flipBlock = (selectedBlock) => {

  selectedBlock.classList.add('flipped')

}

// Stop clicking function
let stopClicking = () => {

  blocksContainer.classList.add('no-clicking');

  setTimeout(() => {
    // Remove class no-clicking after the duration
    blocksContainer.classList.remove('no-clicking');
  }, duration)
}

// check matched block function
let matchedBlock = (firstBlock , secondBlock) => {

  let triesElement = document.querySelector('.info-traies span');

  if (firstBlock.dataset.animals === secondBlock.dataset.animals) {

    firstBlock.classList.remove('flipped');
    secondBlock.classList.remove('flipped');

    firstBlock.classList.add('matched');
    secondBlock.classList.add('matched');

    document.getElementById('success').play()

  }else {

    triesElement.textContent = parseInt(triesElement.textContent) + 1;

    setTimeout(() => {
      
      firstBlock.classList.remove('flipped');
      secondBlock.classList.remove('flipped');

      document.getElementById('fail').play()
    }, duration)

  }

}

// shuffle function
function shuffle(array)  {

    // vars settings
    let current = array.length,
        temp,
        random;

    while (current > 0) {
      // Get random number
      random = Math.floor(Math.random() * current);

      // decrease length
      current--;

      // 1 - save current element in stash
      temp = array[current];
      // 2 - current element = random element
      array[current] = array[random];
      // 3 - random element = temp
      array[random] = temp;

    }

    return array;
}
























/* my failer try
let current = orderRange.length;

while (orderRange.length > 0) {

  let randomNum = Math.floor(Math.random() * orderRange.length);

  orderRange.length--;

  temp = orderRange[current];

  console.log(temp); // undefined

  // don't use () => {}

}
*/
