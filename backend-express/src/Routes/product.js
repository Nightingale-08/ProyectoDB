const { Router } = require("express");

const router = Router(); //se llama router el app solo por documentacion

let products = [
  {
    id: 1,
    name: "laptop",
    price: 3000,
  },
];

router.get("/products", (req, res) => {
  res.send(products);
});

router.post("/products", (req, res) => {
  const newProducts = { ...req.body, id: products.length + 1 };
  products.push(newProducts);
  res.send(newProducts);
});

router.put("/products/:id", (req, res) => {
  //por cada producto que vaya recorriendo, comprueba si existe
  const newData = req.body;
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  //En caso que no
  if (!productFound)
    return res.status(404).send({
      message: "Producto no encontrado",
    });

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  ); //sugar en su maxima expresion "?" para confirmar booleanos y ":" para decir el sino
  res.json({
    message: "producto actualizado",
  });
});

router.delete("/products/:id", (req, res) => {
  //por cada producto que vaya recorriendo, comprueba si existe
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  //En caso que no
  if (!productFound)
    return res.status(404).send({
      message: "Producto no encontrado",
    });

  products = products.filter(
    (product) => product.id !== parseInt(req.params.id) // va a mantener todo el array que no contenta el id dado
  );

  res.sendStatus(204);
});

router.patch("/products", (req, res) => {
  res.send("Actualizando una parte del productos");
});

router.get("/products/:id", (req, res) => {
  //por cada producto que vaya recorriendo
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  //En caso que no
  if (!productFound)
    return res.status(404).send({
      message: "Producto no encontrado",
    });
  res.send(productFound);
});

module.exports = router;