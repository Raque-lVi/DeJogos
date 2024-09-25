

objet = [
    { codigo: "251220925", img: "https://cdn2.scratch.mit.edu/get_image/project/251220925_480x360.png" },
    { codigo: "294650712", img: "https://cdn2.scratch.mit.edu/get_image/project/294650712_480x360.png" },
    { codigo: "2319844", img: "https://cdn2.scratch.mit.edu/get_image/project/2319844_480x360.png" },
    { codigo: "127932256", img: "https://cdn2.scratch.mit.edu/get_image/project/127932256_480x360.png" },
    { codigo: "692065070", img: "https://cdn2.scratch.mit.edu/get_image/project/692065070_480x360.png" },
    { codigo: "326745910", img: "https://cdn2.scratch.mit.edu/get_image/project/326745910_480x360.png" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" },
    // { codigo: "", img: "./src/img/" }
]


function Jogar(id){
    console.log(id);
    imgX = document.getElementById(id);
    ifreme = document.getElementById("jogoOn");

    console.log(imgX.src);

    objet.forEach(element => {
        if (imgX.src == element.img) {

            ifreme.src = `https://scratch.mit.edu/projects/${element.codigo}/embed`;
            
        }
    });

}



