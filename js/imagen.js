
'use strict';
const e = React.createElement;


class App extends React.Component {
  render() {
    // Datos que debe renderizar la imagen

    const item = [{
      id: 1,
      img: 'assets/img/imagen.png',
      class: 'img-fluid',
      alt: 'encontrar instrumetno',
      title: 'Encuentra tu instrumento',
      target: '_blank',
      link: 'viento.html'
    }];
    return item.map(item => {
      // Es necesario colocar una 'key' a partir de la versión de React JS 16
      // colocamos el objeto 'id: 1' en <div key={ item.id } 

      return /*#__PURE__*/React.createElement("a", {
        key: item.id,
        href: item.link,
        target: item.target
      }, /*#__PURE__*/React.createElement("img", {
        className: item.class,
        src: item.img,
        alt: item.alt,
        title: item.title
      }));
    });
  }
}
;

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));