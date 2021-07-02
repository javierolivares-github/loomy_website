// Constantes
const blog_El = document.getElementById('blog');

const article = `
      <article id="article01" class="article">
        
        <h2 class="article__title">¿Cómo teñir lana de forma super orgánica?</h2>
       
        <div class="article__imgContainer">
          <a href="article/article01.html">
            <img src="https://source.unsplash.com/1600x900/?nature,water" alt="tintes" class="article__img">
          </a>
        </div>
        
        <div class="article__badgeContainer">
          <span class="badge bg-info article__badge">#5 min lectura</span>
          <span class="badge bg-warning article__badge">#Silvana Vitali</span>
        </div>
        
        <p class="article__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec urna lorem. Donec pulvinar tempus ante id consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vel sem auctor...</p>
        
        <div>
          <a href="article/article01.html" class="btn--primary">Leer más</a>
        </div>
      </article>
`;

// Salida consola
console.log(blog_El);
console.log(article);

// Salida pantalla
blog_El.innerHTML = article;
