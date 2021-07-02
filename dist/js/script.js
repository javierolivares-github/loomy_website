function obtenerArticulos () {
  fetch('./db/db.json')
  .then(res => res.json())
  .then(data => {
    let salida = '';

    data.forEach(function(articulo){
      salida += `
        <article class="article">
        
          <h2 class="article__title">${articulo.title}</h2>
        
          <div class="article__imgContainer">
            <a href="article/article01.html">
              <img src="${articulo.img}" alt="tintes" class="article__img">
            </a>
          </div>
          
          <div class="article__badgeContainer">
            <span class="badge bg-info article__badge">${articulo.time}</span>
            <span class="badge bg-warning article__badge">${articulo.author}</span>
          </div>
          
          <p class="article__paragraph">${articulo.content}</p>
          
          <div>
            <a href="article/article01.html" class="btn--primary">Leer más</a>
          </div>
        </article>
      `;
    });

    document.getElementById('blog').innerHTML = salida;
  })
};

obtenerArticulos();


