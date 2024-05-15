document.getElementById('createNodeBtn').addEventListener('click', createNode);

function createNode() {
    const graphPanel = document.getElementById('graphPanel');
    const node = document.createElement('div');
    node.className = 'node';
    
    // Random position within the graph panel boundaries
    const panelWidth = graphPanel.offsetWidth;
    const panelHeight = graphPanel.offsetHeight;
    const nodeSize = 50; // Width and Height of the node
    
    const posX = Math.random() * (panelWidth - nodeSize);
    const posY = Math.random() * (panelHeight - nodeSize);
    
    node.style.left = `${posX}px`;
    node.style.top = `${posY}px`;
    
    // Optional: Add text or number inside the node
    node.textContent = Math.floor(Math.random() * 100);
    
    graphPanel.appendChild(node);
}
