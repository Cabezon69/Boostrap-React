"use strict";

const a = React.createElement;


class Mapa extends React.Component {
    render() {
        // Datos del Google Map

        const imagen = [{
            id: 1,
            fuente: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6145990253435!2d-13.866810349779959!3d28.491151082387823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47c64a5f10e16b%3A0x5e7b80d5bba8ab16!2sPalacio%20de%20Formaci%C3%B3n%20y%20Congresos%20de%20Fuerteventura!5e0!3m2!1ses!2ses!4v1674474867283!5m2!1ses!2ses',
            title: 'Google Maps'
        }];
        return (
            // Renderizamos el Mapa de Google, dentro de este colocamos cada objeto del array 'const imagen'

            imagen.map(item => {
                // Es necesario colocar una 'key' a partir de la versión de React JS 16
                // colocamos el objeto 'id: 1' en <div key={ item.id } 

                return /*#__PURE__*/React.createElement("div", {
                    key: item.id,
                    className: "embed-responsive embed-responsive-4by3"
                }, /*#__PURE__*/React.createElement("iframe", {
                    className: "embed-responsive-item",
                    src: item.fuente,
                    title: item.title,
                    style: {
                        Border: +"0"
                    }
                }));
            })
        );
    }
}

const mapa = document.querySelector('#mapa');
const mapagoogle = ReactDOM.createRoot(mapa);
mapagoogle.render(a(Mapa));