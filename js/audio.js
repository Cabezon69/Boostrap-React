
'use strict';
const e = React.createElement;


class Audio extends React.Component {
    render() {
        // Datos que debe cargar el audio

        const item = [{
            id: 1,
            audio: 'assets/audio/audio.mp3',
            formato: 'audio/mpeg'
        }];
        return item.map(item => {
            // Es necesario colocar una 'key' a partir de la versión de React JS 16
            // colocamos el objeto 'id: 1' en <div key={ item.id } 

            return React.createElement("div", {
                key: item.id
            }, React.createElement("audio", {

                autoPlay: true


            }, React.createElement("source", {
                src: item.audio,
                type: item.formato
            })));
        });
    }
}
;
const domContainer = document.querySelector('#audio');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Audio));