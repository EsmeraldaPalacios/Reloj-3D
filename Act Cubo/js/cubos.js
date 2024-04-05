function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

function rotateCube(event) {
    const cube = document.getElementById('cube');
    const cubeRect = cube.getBoundingClientRect();
    const centerX = cubeRect.left + cubeRect.width / 2;
    const centerY = cubeRect.top + cubeRect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const rotationX = deltaY / 20; 
    const rotationY = deltaX / 20; 
  
    cube.style.transform = `rotateX(${-40 + rotationX}deg) rotateY(${rotationY}deg)`; 
}
  
function toggleHour() {
    const hourElement = document.getElementById('hours');
    hourElement.classList.toggle('active');
}
  
function toggleMinute() {
    const minuteElement = document.getElementById('minutes');
    minuteElement.classList.toggle('active');
}
  
function toggleSecond() {
    const secondElement = document.getElementById('seconds');
    secondElement.classList.toggle('active');
}
  
updateClock();
setInterval(updateClock, 1000);
