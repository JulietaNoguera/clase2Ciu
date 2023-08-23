import './App.css';
import Controlador from './components/mvc/Controlador';
import Presentador from './components/mvp/Presentador';
import ModeloDeVista from './components/mvvm/ModeloDeVista';
import ListaDeCompra from './composition/ListaDeCompra';

function App() {
  const listaCompleta= [ 
    {nombre:"coca-cola", cantidad:1},
    {nombre:"picada", cantidad:2},
    {nombre:"azucar", cantidad:1},
    {nombre:"fideos", cantidad:1},
    {nombre:"arroz", cantidad:1},

  ];

  return (
    <>
     <p>Modelo vista controlador </p>
      <Controlador></Controlador>
      <p>Modelo vista presentador  </p>
      <Presentador></Presentador>
      <p>Modelo de vista  </p>
      <ModeloDeVista></ModeloDeVista>

      <h3>Lista de compras</h3>
      <ListaDeCompra 
        items={listaCompleta}/>
    </>
  );
}

export default App;
