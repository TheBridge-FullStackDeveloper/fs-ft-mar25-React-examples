import React, { useState, useRef } from "react";
import TravelItem from "./TravelItem";
import data from "./data.js";

const TravelList = () => {
  // const datos = [
  //   {
  //     title: "Viaje a la playa",
  //     description: "Disfruta de unas vacaciones en la playa",
  //     price: 100,
  //     img_url: "https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg"
  //   },
  //   {
  //     title: "Viaje a la montaña",
  //     description: "Escápate a la montaña y disfruta de la naturaleza",
  //     price: 150,
  //     img_url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
  //   },
  //   {
  //     title: "Viaje a la ciudad",
  //     description: "Descubre las maravillas de la ciudad",
  //     price: 200,
  //     img_url: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg"
  //   },
  //   {
  //     title: "Viaje a la selva",
  //     description: "Aventura en la selva",
  //     price: 250,
  //     img_url: "https://png.pngtree.com/background/20230616/original/pngtree-lush-and-tropical-rainforest-picture-image_3622369.jpg"
  //   }
  // ];

  // Estado inicial del array de destinos --> data
  // useState crea un estado (memoria) para el componente
  //estado

  // Estado inicial del array de destinos
  const [items, setItems] = useState(data); // [{},{},{}]

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: 0,
    img_url: ""
  });

  const inputRef = useRef(""); // esta referencia será un string vacío al principio

  const handleButtonClick = () => {
    // Validación con regex aquí
    // El dato está guardado en inputRef.current.value
    alert(`Te enviamos la info a tu correo: ${inputRef.current.value}`);
  };

  const paintData = () =>
    items.map((item, index) => (
      <TravelItem key={index} data={item} remove={() => removeItem(index)} />
    ));

  const removeAllItems = () => setItems([]);
  const resetItems = () => setItems(data);

  // nombre array -> items
  // borrar el item en la posición i
  // solo puedes usar items y setItems
  const removeItem = (i) => {
    const remainingItems = items.filter((item, index) => index !== i);
    setItems(remainingItems);
  };
  const addItem = (new_item) => {
    setItems([...items,new_item]);
  }
  // Tarea
  const editItem = (i,new_item) => {}

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    addItem(values);
  };

  return (
    <section>
      <h3>Destinos</h3>
      {/* Comunicación por props  */}
      {/* <TravelItem data={datos[0]}/>
    <TravelItem data={datos[1]}/>
    <TravelItem data={datos[2]}/>
    <TravelItem data={datos[3]}/> */}

      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" onChange={handleChange} /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" onChange={handleChange} /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="img_url" onChange={handleChange} /><br />
       
       {values.title && values.description && values.price>0 && values.img_url ?
       <button type="submit">Crear destino</button>:
       <b>Rellena todos los campos para poder enviar</b>
       }
       
        
        
      </form>

      {paintData()}
      <button onClick={removeAllItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>
      <button onClick={() => removeItem(1)}>Borrar un elemento</button>
    
    <h2>Introduce tu email para mandar info</h2>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Enviar</button>
    </div>
    
    </section>
  );
};

export default TravelList;
