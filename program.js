let glavniDiv = document.createElement('div');
document.body.appendChild(glavniDiv);

//body - css
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.textAlign = 'center';

//glavniDiv - css
glavniDiv.style.width = '80%';
glavniDiv.style.margin = '0 auto 0 auto';
glavniDiv.style.border = '2px solid rgb(114,160,193)';
glavniDiv.style.borderRadius = '30px';
glavniDiv.style.padding = '0.6em';

//document.div - css
function divStil(divNaziv){

    divNaziv.style.width = '60%';
    //divNaziv.style.border = '1px dashed black';
    //divNaziv.style.borderRadius = '10px';
    divNaziv.style.margin = '0 auto 0 auto';
    divNaziv.style.padding = '0.6em';

}

function kreirajDiv(imeDiv, rDiv){

    imeDiv = document.createElement('div');
    rDiv.appendChild(imeDiv);

}

function tekstStil(txtNaziv){

    txtNaziv.style.width = '50%';
    txtNaziv.style.border = '1px solid rgb(114,160,193)';
    txtNaziv.style.borderRadius = '10px';
    txtNaziv.style.margin = '0 auto 0 auto';
    txtNaziv.style.textAlign = 'center';
    txtNaziv.style.padding = '0.6em';

}

let naslovniDiv = document.createElement('div');
glavniDiv.appendChild(naslovniDiv);
let naslovniTekst = document.createElement('p');
naslovniTekst.textContent = 'JavaScript GIS veb interfejs';
naslovniDiv.appendChild(naslovniTekst);

tekstStil(naslovniTekst);
divStil(naslovniDiv);

let divTekstMapa = document.createElement('div');
glavniDiv.appendChild(divTekstMapa);

divStil(divTekstMapa);

let txtMapa = document.createElement('p');
txtMapa.textContent = 'Mapa Beograda ';
divTekstMapa.appendChild(txtMapa);
tekstStil(txtMapa);

let divMapa = document.createElement('div');
glavniDiv.appendChild(divMapa);
divMapa.id = 'divMapaI';

divStil(divMapa);
divMapa.style.width = '95%';
divMapa.style.height = '37em';
divMapa.style.border = '2px dashed rgb(114,160,193)';
divMapa.style.borderRadius = '20px';

//ArcGIS mapa:
require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView){

    esriConfig.apiKey = 'AAPK2ea63d879cc54628aca165f612c7c18eHL3sBlfMalg4D01a4F_HmA6xLn8REJCoLB0Musdq9kkarcQVu0cH8M9BFw8CjFmD';
    const map = new Map({
        basemap: 'arcgis-topographic'
    });

    const view = new MapView({

        map: map,
        center: [20.457273, 44.797197], //longitude (geo. dužina), latitude (geo. širina) - Beograd [44.797197, 20.457273]
        zoom: 11,
        container: 'divMapaI'

    });

});
