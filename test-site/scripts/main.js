let myImage = document.querySelector('img');
let myImgArray = ['images/scottsan-audience.jpg', 'images/scottsan.jpg', 'images/milliways-1.jpg'] // this code belongs with the attempted for loop below

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  //figure this one out
  // for (let i = 0; i < myImgArray.length; i++) {
  //   if (mySrc = myImgArray[i]) {
  //     console.log(myImgArray[i]);
  //     return myImage.setAttribute('src', myImgArray[i + 1]);
  //   }
  // }
  // original example code
  // if (mySrc === 'images/scottsan-audience.jpg') {
  //   myImage.setAttribute('src', 'images/scottsan.jpg');
  // } else {
  //   myImage.setAttribute('src', 'images/scottsan-audience.jpg');
  // }
  // also tried:
  switch (mySrc) {
    case ('images/milliways-1.jpg'):
      myImage.setAttribute('src', 'images/scottsan.jpg');
      break; // have to break, otherwise it will keep going to the next image, and the next until it lands on the last which is the same which will make it seem like nothing happened

    case ('images/scottsan.jpg'):
      myImage.setAttribute('src', 'images/scottsan-audience.jpg');
      break;
    case ('images/scottsan-audience.jpg'):
      myImage.setAttribute('src', 'images/milliways-1.jpg');
      break;
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  /*Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name.*/
  if (!myName) { /*In human language, this means: If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.*/
    // setUserName();
    myHeading.textContent = "Welcome to Milliways!";
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Milliways, ' + myName + "!";
  }
}

/*Add the if ... else block (below). We could call this initialization code, as it structures the app when it first loads.*/
if (!localStorage.getItem('name')) { //check wheather the name data exists
  setUserName();//if not the setUserName() function runs to create it
} else { //if it exists we retrieve the stored name using getItem() and set the textContent of the geading 
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Milliways, ' + storedName;
}

/*Put this onclick event handler (below) on the button. When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button.*/
myButton.onclick = function () {
  setUserName();
}
