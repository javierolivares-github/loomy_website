// Función obtener todos los articulos
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

    document.getElementById('blog').innerHTML = salidaArticulos;
  })
};

// Función para obtener articulos filtrados por categoria de Tejidos.
function obtenerCategoriaTejidos(){
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
    // Filtrando articulos con categoria Tejidos.
    let categoriaTejidos = data.filter(articulo => articulo.category === 'Tejidos');
    console.log(categoriaTejidos);
    
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

    document.getElementById('blog').innerHTML = salidaCategoriaTejidos;
  });
};

// Función para obtener articulos filtrados por categoria de Crianza.
function obtenerCategoriaCrianza (){
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
};

// obtenerArticulos();
obtenerCategoriaTejidos(); 
obtenerCategoriaCrianza(); 


