export function headerFunction() {
    const header = document.createElement("header");
    let url_base = "https://hunigolesan.github.io/mi-primera-chamba/"
    header.classList.add("c-header");
    header.innerHTML = `
        <div class="c-logo">
            <span>Mi Primera Chamba</span>
        </div>

        <div class="c-enlaces-btn">
            <div class="c-enlaces">
                <a href="${url_base}/index.html">Inicio</a>
                <a href="${url_base}/pages/buscar.html">Buscar Empleo</a>
                <a href="${url_base}/pages/nosotros.html">Nosotros</a>
                <a href="${url_base}/pages/contacto.html">Contáctanos</a>
            </div>
            <div class="c-btns">
           <a href="${url_base}/pages/iniciar_sesion.html"><button class="btn-login">Iniciar Sesión</button></a></button>
            <a href="${url_base}/pages/iniciar_sesion.html"><button class="btn-register">Registrarse</button></a>
            </div>
        </div>

        <!-- Icono Oculto Inicialmente -->
        <div class="c-hamburguer">
            <img onclick="touchHamburguer()" src="../../media/svg/hamburguer-alter.svg" alt="Menú hamburguesa">
        </div>
    
        <!-- Menú Oculto Inicialmente -->
        <div class="menu-movil">
            <a href="#">Inicio</a>
            <a href="#">Buscar Empleo</a>
            <a href="#">Nosotros</a>
            <a href="#">Contáctanos</a>
            <div class="c-btns c-btns-movil">
                <button class="btn-login btn-movil">Iniciar Sesión</button>
                <button class="btn-register btn-movil">Registrarse</button>
            </div>
        </div>
    `;

    return header;
}
