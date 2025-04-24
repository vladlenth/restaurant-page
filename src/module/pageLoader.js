export function loadPage(tabFunction) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    const newContent = tabFunction();
    contentDiv.appendChild(newContent);
}