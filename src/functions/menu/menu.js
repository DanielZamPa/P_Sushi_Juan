// import listaProductos from "../claseProducto";

const contenedorMenu = document.getElementById("menu");
const listaProductos = [
    {
        nombre: "Haganezuka roll",
        descripcion: "Rollo de arroz, alga nori, salmon, aguacate, mango y queso crema.",
        precio: 35000
    },
    {
        nombre: "California Roll",
        descripcion: "Rollo de arroz, alga nori, palmito de cangrejo, aguacate y pepino.",
        precio: 22000
    },
    {
        nombre: "Philadelphia Roll",
        descripcion: "Rollo de salmón fresco, queso crema y aguacate.",
        precio: 26000
    },
    {
        nombre: "Dragón Roll",
        descripcion: "Rollo tempurizado relleno de camarón, cubierto con aguacate y salsa especial.",
        precio: 32000
    },
    {
        nombre: "Tiger Roll",
        descripcion: "Rollo de camarón apanado, aguacate y queso crema, con salsa de anguila.",
        precio: 30000
    },
    {
        nombre: "Ebi Roll",
        descripcion: "Rollo de camarón cocido, pepino y aguacate.",
        precio: 28000
    },
    {
        nombre: "Salmón Roll",
        descripcion: "Rollo de salmón fresco, pepino y aguacate.",
        precio: 29000
    },
    {
        nombre: "Atún Roll",
        descripcion: "Rollo de atún fresco, cebollín y aguacate.",
        precio: 31000
    },
    {
        nombre: "Vegetariano Roll",
        descripcion: "Rollo de pepino, zanahoria, aguacate y queso crema.",
        precio: 20000
    },
    {
        nombre: "Tempura Roll",
        descripcion: "Rollo frito relleno de salmón, queso crema y aguacate.",
        precio: 33000
    },
    {
        nombre: "Crunchy Roll",
        descripcion: "Rollo cubierto con hojuelas crocantes, relleno de camarón y queso crema.",
        precio: 34000
    },
    {
        nombre: "Nigiri de Salmón (2 unidades)",
        descripcion: "Bocados de arroz cubiertos con láminas de salmón fresco.",
        precio: 14000
    },
    {
        nombre: "Nigiri de Atún (2 unidades)",
        descripcion: "Bocados de arroz cubiertos con láminas de atún fresco.",
        precio: 16000
    },
    {
        nombre: "Sashimi de Salmón (8 cortes)",
        descripcion: "Láminas de salmón fresco servidas sin arroz.",
        precio: 28000
    },
    {
        nombre: "Sashimi Mixto (12 cortes)",
        descripcion: "Selección de salmón, atún y pescado blanco.",
        precio: 42000
    },
    {
        nombre: "Gyozas de Cerdo (6 unidades)",
        descripcion: "Empanadillas japonesas rellenas de cerdo y vegetales.",
        precio: 18000
    },
    {
        nombre: "Gyozas de Pollo (6 unidades)",
        descripcion: "Empanadillas japonesas rellenas de pollo y vegetales.",
        precio: 17000
    },
    {
        nombre: "Edamame",
        descripcion: "Vainas de soya al vapor con sal marina.",
        precio: 12000
    },
    {
        nombre: "Yakimeshi de Pollo",
        descripcion: "Arroz frito japonés con pollo y vegetales.",
        precio: 22000
    },
    {
        nombre: "Yakimeshi Especial",
        descripcion: "Arroz frito japonés con pollo, camarón y vegetales.",
        precio: 28000
    },
    {
        nombre: "Ramen de Cerdo",
        descripcion: "Sopa japonesa con fideos, cerdo, huevo y vegetales.",
        precio: 32000
    },
    {
        nombre: "Té Verde Japonés",
        descripcion: "Bebida tradicional japonesa servida caliente o fría.",
        precio: 6000
    },
    {
        nombre: "Limonada de Coco",
        descripcion: "Limonada cremosa con coco rallado.",
        precio: 9000
    },
    {
        nombre: "Gaseosa",
        descripcion: "Bebida gaseosa personal de diferentes sabores.",
        precio: 5000
    },
    {
        nombre: "Mochi de Fresa",
        descripcion: "Postre japonés de arroz glutinoso relleno de crema sabor fresa.",
        precio: 10000
    },
    {
        nombre: "Mochi de Matcha",
        descripcion: "Postre japonés de arroz glutinoso relleno de crema de té verde.",
        precio: 10000
    }
];

listaProductos.forEach((producto, index) => {
    const numeroFila = Math.floor(index / 3);
    const idFila = `fila${numeroFila}`;

    if (index % 3 === 0) {
        contenedorMenu.innerHTML += `
        <div class="row g-4 mb-4" id="${idFila}">
        </div>
        `;
    }

    const filaActual = contenedorMenu.querySelector(`#${idFila}`);

    filaActual.innerHTML += `
            <div class="col-12 col-md-4 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="./src/assets/img/mixed-sushi-rolls-plate.jpg" alt="imagen de producto"
                        class="w-auto h-50 img-fluid object-fit-cover rounded-1 card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}
                        </p>
                        <hr class="card-footer">
                        <p class="precio">${producto.precio}</p>
                        <!-- boton de whatsapp -->
                        <a href="https://api.whatsapp.com/send?phone=573115502030&text=Hola,%20¿qué%20tal%20estás?  "     target="_blank"
                            class="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>                            
                        </a>
                        <!-- boton de agregar al carrito -->
                        <button type="button" class="btn position-relative" id="agregarCartButtomProducto1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"     class="bi   bi-cart"
                                viewBox="0 0 16 16">
                                <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill      visually-hidden"
                                id="badgeShopCart">
                                99+
                                <span class="visually-hidden">shop card</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
    `;
});