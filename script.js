window.onload = function() {
    alert('Welcome to my web page!');
<button onclick="changeBackgroundColor()">Change Background Color</button>

<button onclick="changeBackgroundColor()">Change Background Color</button>

<button onclick="toggleText()">Toggle Text</button>

<p id="toggleParagraph">This is a toggleable paragraph.</p>

function toggleText() {
    var paragraph = document.getElementById('toggleParagraph');
    if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    } else {
    paragraph.style.display = 'none';
    }
   }
   