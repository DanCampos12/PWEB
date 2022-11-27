const title = document.getElementById("title");
const image = document.getElementById("image");
const retina = document.getElementById("retina");

retina.addEventListener('mouseover', () => {
    image.src = "./janela-aberta.png";
    title.innerText = `A janela está aberta!
        Saia com o mouse para fecha-lá
        ou clique para quebra-lá!`
})

retina.addEventListener('mouseleave', () => {
    image.src = "./janela-fechada.png";
    title.innerText = `A janela está fechada!
        Passe com o mouse para abri-lá!`
})

retina.addEventListener('click', () => {
    image.src = "./janela-quebrada.png";
    title.innerText = `A janela está quebrada!
        Saia com o mouse para restaurar!`
})