document.getElementById('node1').addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    popup.style.top = event.clientY + 'px';
    popup.style.left = (event.clientX + 10) + 'px';  // Positioning right to the node
});

function saveTitle() {
    var title = document.getElementById('nodeTitle').value;
    document.getElementById('title1').textContent = title;
    document.getElementById('popup').style.display = 'none';
}

// Hide popup if clicked outside
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (!popup.contains(event.target) && event.target.id !== 'node1') {
        popup.style.display = 'none';
    }
});