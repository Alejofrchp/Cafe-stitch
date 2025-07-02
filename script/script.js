let carrito = [];

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito-lista");
  const totalSpan = document.getElementById("total");
  const contador = document.getElementById("cart-count");

  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
    lista.appendChild(li);
  });

  totalSpan.textContent = `Total: $${total.toFixed(2)}`;
  contador.textContent = carrito.length;
}

function ordenar() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let mensaje = "Has ordenado:\n";
  carrito.forEach((item) => {
    mensaje += `- ${item.producto} ($${item.precio.toFixed(2)})\n`;
  });
  mensaje += `\nTotal: $${carrito.reduce((t, i) => t + i.precio, 0).toFixed(2)}`;

  alert(mensaje);
  carrito = [];
  actualizarCarrito();
}
