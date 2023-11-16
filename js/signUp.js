let audioBackground=new Audio("../sounds/רקע.mp3");

function start(){
    audioBackground.play();
}

function handleClick() {
    const input = document.getElementById('myInput');
    const inputValue = input.value;

    localStorage.setItem('inputValue', JSON.stringify(inputValue));
    window.location.href = 'home.html';
}