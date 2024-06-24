function allowDrop(event) {
    event.preventDefault();
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

/*<div id="drag1" draggable="true" ondragstart="dragStart(event)">
Contenido arrastrable
</div>

<div id="dropbox" ondrop="drop(event)" ondragover="allowDrop(event)">
Soltar aquí
</div>*/
