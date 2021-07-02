// FUNCIONES
// Obtener todos los articulos.
function obtenerArticulos () {
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    let salidaArticulos = '';

    data.forEach(function(articulo){
      salidaArticulos += `
        <article class="article">
        
          <h2 class="article__title">${articulo.title}</h2>
        
          <div class="article__imgContainer">
            <a href="article/article01.html">
              <img src="${articulo.img}" alt="tintes" class="article__img">
            </a>
          </div>
          
          <div class="article__badgeContainer">
          <span class="badge bg-warning text-dark article__badge">${articulo.author}</span>
          <span class="badge bg-danger article__badge">${articulo.date}</span>
          <span class="badge bg-info article__badge">${articulo.read_time}</span>
          <span class="badge bg-primary article__badge">${articulo.category}</span>
          </div>
          
          <p class="article__paragraph">${articulo.content}</p>
          
          <div>
            <a href="article/article01.html" class="btn--primary">Leer más</a>
          </div>
        </article>
      `;
    });

    // Salida pantalla
    document.getElementById('blog').innerHTML = salidaArticulos;
  })
  .catch (err => console.log('Error: ' + err.message));
};

// Obtener articulos filtrados por categoria de Tejidos.
function obtenerArticulosPorCategoriaTejidos(){
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    
    // Filtrando articulos con categoria Tejidos.
    let categoriaTejidos = data.filter(articulo => articulo.category === 'Tejidos');

    
    // Creando una salida para los articulos fltrados por Tejidos.
    let salidaCategoriaTejidos = '';

    categoriaTejidos.forEach(function(articulo){
      salidaCategoriaTejidos += `
      <article class="article">
        <h2 class="article__title">${articulo.title}</h2>
        <div class="article__imgContainer">
          <a href="article/article01.html">
            <img src="${articulo.img}" alt="tintes" class="article__img">
          </a>
        </div>
        <div class="article__badgeContainer">
        <span class="badge bg-warning text-dark article__badge">${articulo.author}</span>
        <span class="badge bg-danger article__badge">${articulo.date}</span>
        <span class="badge bg-info article__badge">${articulo.read_time}</span>
        <span class="badge bg-primary article__badge">${articulo.category}</span>
        </div>
        <p class="article__paragraph">${articulo.content}</p>
        <div>
          <a href="article/article01.html" class="btn--primary">Leer más</a>
        </div>
      </article>
      `;
    });

    // Salida pantalla
    document.getElementById('blog').innerHTML = salidaCategoriaTejidos;
  })
  .catch (err => console.log('Error: ' + err.message));
};

// Obtener articulos filtrados por categoria de Crianza.
function obtenerArticulosPorCategoriaCrianza (){
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
      // Filtrando por Crianza
      const categoriaCrianza = data.filter(articulo => articulo.category === 'Crianza');
      
      // Creando una salida para estos articulos.
      let salidaCategoriaCrianza = '';

      categoriaCrianza.forEach(function(articulo){
        salidaCategoriaCrianza += `
          <article class="article">
            <h2 class="article__title">${articulo.title}</h2>
            <div class="article__imgContainer">
              <a href="article/article01.html">
                <img src="${articulo.img}" alt="tintes" class="article__img">
              </a>
            </div>
            <div class="article__badgeContainer">
            <span class="badge bg-warning text-dark article__badge">${articulo.author}</span>
            <span class="badge bg-danger article__badge">${articulo.date}</span>
            <span class="badge bg-info article__badge">${articulo.read_time}</span>
            <span class="badge bg-primary article__badge">${articulo.category}</span>
            </div>
            <p class="article__paragraph">${articulo.content}</p>
            <div>
              <a href="article/article01.html" class="btn--primary">Leer más</a>
            </div>
          </article>
        `;
      });

      // Salida pantalla
      document.getElementById('blog').innerHTML = salidaCategoriaCrianza;
  })
  .catch (err => console.log('Error: ' + err.message));
};

// Obtener articulos filtrados por autor Silvana.
function obtenerArticulosPorAutorSilvana() {
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    
    // Filtrando por autor Silvana Vitali
    const articulosDeSilvana = data.filter(articulo => articulo.author === 'Silvana Vitali');
    console.log(articulosDeSilvana);

    // Creando una plantilla para salida
    let salidaArticulosDeSilvana = '';

    articulosDeSilvana.forEach(articulo => {
      salidaArticulosDeSilvana += `
      <article class="article">
        <h2 class="article__title">${articulo.title}</h2>
        <div class="article__imgContainer">
          <a href="article/article01.html">
            <img src="${articulo.img}" alt="tintes" class="article__img">
          </a>
        </div>
        <div class="article__badgeContainer">
          <span class="badge bg-warning text-dark article__badge">${articulo.author}</span>
          <span class="badge bg-danger article__badge">${articulo.date}</span>
          <span class="badge bg-info article__badge">${articulo.read_time}</span>
          <span class="badge bg-primary article__badge">${articulo.category}</span>
        </div>
        <p class="article__paragraph">${articulo.content}</p>
        <div>
          <a href="article/article01.html" class="btn--primary">Leer más</a>
        </div>
      </article>
      `;
    });

    // Mostrando la salida en pantalla
    document.getElementById('blog').innerHTML = salidaArticulosDeSilvana;

  })
  .catch (err => console.log('Error: ' + err.message));
};


// EVENTOS
// Activar funcion obtenerArticulosPorCategoriaTejidos al dar un click en 'tejidos'.
const tejidos_El = document.getElementById('tejidos');
tejidos.addEventListener('click', () => {
  obtenerArticulosPorCategoriaTejidos();
});

// Activar funcion obtenerArticulosPorCategoriaCrianza al dar un click en 'crianza'.
const crianza_El = document.getElementById('crianza');
crianza_El.addEventListener('click', () => {
  obtenerArticulosPorCategoriaCrianza();
});

// Activar funcion obtenerArticulosPorAutorSilvana al dar un click en 'silvana'.
const silvana_El = document.getElementById('silvana');
silvana_El.addEventListener('click', () => {
  obtenerArticulosPorAutorSilvana(); 
})


// INICIO
obtenerArticulos();