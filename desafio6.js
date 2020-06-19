const usuarios = [
    {Nome: "Rodrigo", Tecnologias: ["JS", "Python"] },
    {Nome: "Jaliel", Tecnologias: ["C++", "CSS"] },
    {Nome: "Lucas", Tecnologias: ["Angular", "CSS"] },
]

function check(usuarios){
    for (let tecnologia of usuarios.Tecnologias) {
        if (tecnologia == 'CSS'){
            return true
        }
    }
    return false
}



for(let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = check(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].Nome} trabalha com CSS`);
    }
  }

