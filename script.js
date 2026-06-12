const modal = document.getElementById("storyModal");
const img = document.getElementById("storyImg");

function abrirStory(foto){
    modal.style.display = "flex";
    img.src = foto;
}

function fecharStory(){
    modal.style.display = "none";
}
