const main = document.querySelector('main')

const cargando =document.getElementById('cargando')
      setTimeout(() => {
        cargando.style.display = 'none'
        main.style.display= 'block'  //se puede acceder a todas las propiedades de css con style
      }, 2000);


      const nombre = prompt('coloque su nombre') //con campo para rellenar
      if(nombre){
        //document.querySelector('.subtitulo').innerHTML //para cajas
        document.querySelector('.subtitulo').textContent += nombre.toUpperCase() //para texto
      }else{
        document.querySelector('.subtitulo').textContent += 'invitado'
      }

      const cambiar= confirm('Queres cambiar el color de fondo?')//devuelve booleano
      if (cambiar) {
        document.body.classList.add('fondo') //add agrega una clase
      }

      const parrafos = document.querySelectorAll('p')
      parrafos.forEach((parrafo,index) => {
        if ((index + 1) % 2 === 0) {
          parrafo.classList.add('destacadoPar')
        }else{
          parrafo.classList.add('destacadoImpar')
        }
        console.log(parrafo);
      });

      const H2 = document.querySelector("h2")
      H2.style.textTransform = "uppercase"
      
      
      const link = document.querySelector('a')
      link.style.color = '#E51B3E'