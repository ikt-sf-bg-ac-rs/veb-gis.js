let glavniDiv = document.createElement('div');
document.body.appendChild(glavniDiv);

//body - css
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.textAlign = 'center';

//glavniDiv - css
glavniDiv.style.width = '90%';
glavniDiv.style.margin = '0 auto 0 auto';
glavniDiv.style.border = '2px solid rgb(114,160,193)';
glavniDiv.style.borderRadius = '30px';
glavniDiv.style.padding = '0.6em';

//document.div - css
function divStil(divNaziv){

    divNaziv.style.width = '90%';
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

    txtNaziv.style.width = '70%';
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
txtMapa.textContent = 'Opcije prikaza ';
divTekstMapa.appendChild(txtMapa);
tekstStil(txtMapa);

//////
let divPrikaz = document.createElement('div');
glavniDiv.appendChild(divPrikaz);
divStil(divPrikaz);

/*
let txt2Dprikaz = document.createElement('p');
txt2Dprikaz.textContent = '2D prikaz';
divPrikaz.appendChild(txt2Dprikaz);
txt2Dprikaz.style.paddingBottom = '10px';

tekstStil(txt2Dprikaz);

let txt3Dprikaz = document.createElement('p');
txt3Dprikaz.textContent = '3D prikaz';
divPrikaz.appendChild(txt3Dprikaz);
tekstStil(txt3Dprikaz);

*/
//////


function podrazumevaniPrikaz(){

    //divMapa.style.display = 'none';
    //divMapa3D.style.display = 'none';

}




/*
window.addEventListener('onload', function(){

    //podrazumevaniPrikaz();
    prikaz2Dmape();
    mapa2D();

});
*/



let opcijePrikaza = ["2D prikaz Beograda", "3D prikaz Beograda", "Prikaz zemljotresa"];
opcijePrikaza.forEach((item) => {

    let odgovor;

    let li = document.createElement('li');
    li.textContent = item;
    divPrikaz.appendChild(li);

    li.style.listStyleType = 'none';
    li.style.width = '30%';
    li.style.border = '1px solid rgb(114,160,193)';
    li.style.borderRadius = '10px';
    li.style.padding = '0.6em';
    li.style.margin = '0 auto 0 auto';
    li.style.display = 'inline-block';

    li.addEventListener('click', function(){

        if(li.textContent == "2D prikaz Beograda"){

            console.log('2d');
            //divMapaZemljotresi.style.display = 'none';
            //divMapaZemljotresi.style.visibility = 'visible';
            prikaz2Dmape();
            mapa2D();

        } else if(li.textContent == "3D prikaz Beograda"){
            
            podrazumevaniPrikaz();
            console.log('3d mapa');
            //obavestenje3Dmapa();
            prikaz3Dmape();
            mapa3D();
            /*
            setTimeout(function(){
                window.location.reload(true);
            }, 3000);
            */

            if(li.textContent == "2D prikaz Beograda" || li.textContent == "Prikaz zemljotresa"){
                
                divMapa3D.style.display = 'none';
                divMapa3D.style.visibility = 'hidden';

                prikaz2Dmape();
                mapa2D();

            }

        } else if(li.textContent == "Prikaz zemljotresa"){

            console.log('Zemljotresi magnitude veće ili jednake od 2.5 stepeni Rihterove skale u proteklih sedam dana. ');
            //divMapaZemljotresi.style.visibility = 'visible';
            //divMapa.style.display = 'none';
            prikaz2Dmape();
            zemljotresiF();

        }

    });
});

let divMapa = document.createElement('div');
glavniDiv.appendChild(divMapa);
divMapa.id = 'divMapaI';

divStil(divMapa);

let divMapa3D = document.createElement('div');
glavniDiv.appendChild(divMapa3D);
divMapa3D.id = 'divMapa3Di';

divStil(divMapa3D);

/*
divMapa.style.width = '90%';
divMapa.style.height = '37em';
divMapa.style.border = '2px dashed rgb(114,160,193)';
divMapa.style.borderRadius = '20px';
*/
function prikaz2Dmape(){

    divMapa3D.style.visibility = 'hidden';
    divMapa3D.style.height = '0px';
    //divMapa.style.display = 'block';
    //divMapaI.style.display = 'block';
    divMapa.style.visibility = 'visible';

    divMapa.style.width = '90%';
    divMapa.style.height = '37em';
    divMapa.style.border = '2px dashed rgb(114,160,193)';
    divMapa.style.borderRadius = '20px';

    //divMapa3D.style.display = 'none';

}

function prikaz3Dmape(){

    
    divMapa.style.visibility = 'visible';
    divMapa.style.height = '0px';
    divMapa.style.border = '0px none rgba(0, 0, 0, 0)';
    divMapa3D.style.visibility = 'visible';

    divMapa3D.style.width = '90%';
    divMapa3D.style.height = '37em';
    divMapa3D.style.border = '2px dashed black';
    divMapa3D.style.borderRadius = '20px';

}

//prikaz2Dmape();

//ArcGIS 2D mapa:
function mapa2D(){
    require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",
    //"esri/layers/CSVlayer" ///CSVlayer
], function(esriConfig, Map, MapView){

        esriConfig.apiKey = 'AAPK2ea63d879cc54628aca165f612c7c18eHL3sBlfMalg4D01a4F_HmA6xLn8REJCoLB0Musdq9kkarcQVu0cH8M9BFw8CjFmD';

        const map = new Map({
            basemap: 'arcgis-topographic', 
        });

        const view = new MapView({

            map: map,
            center: [20.457273, 44.797197], //longitude (geo. dužina), latitude (geo. širina) - Beograd [44.797197, 20.457273]
            zoom: 11,
            container: 'divMapaI', 
            constraits: {
                snapToZoom: false
            }

        });

    });

    /*const csvPodac = new CSVlayer({
        url:
    });
    */
    //map.add();
}

//prikazZemljotresa
function zemljotresiF(){
    require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/CSVLayer"
    ], function(esriConfig, Map, MapView, CSVLayer){

        esriConfig.apiKey = 'AAPK2ea63d879cc54628aca165f612c7c18eHL3sBlfMalg4D01a4F_HmA6xLn8REJCoLB0Musdq9kkarcQVu0cH8M9BFw8CjFmD';

        const map = new Map({
            basemap: 'arcgis-topographic',
        });

        const view = new MapView({

            map: map,
            center: [20.457273, 44.797197],
            zoom: 3,
            container: 'divMapaI',
            constraits: {
                snapToZoom: false
            }

        });

        const csvPod = new CSVLayer({

            url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv',
            copyright: 'USGS zemljotresi'

        });
        map.add(csvPod);

    });
}

//mapa2D();
function obavestenje3Dmapa(){

    let txt3Dmapa = document.createElement('p');
    txt3Dmapa.textContent = 'Poštovani, 3D mapa je u fazi izrade...';
    tekstStil(txt3Dmapa);
    divPrikaz.appendChild(txt3Dmapa);


}

function mapa3D(){

    require([

        "esri/config",
        "esri/Map",
        "esri/views/SceneView",
        

    ], (esriConfig, Map, SceneView)=> {

        esriConfig.apiKey = 'AAPK2ea63d879cc54628aca165f612c7c18eHL3sBlfMalg4D01a4F_HmA6xLn8REJCoLB0Musdq9kkarcQVu0cH8M9BFw8CjFmD';

        const map = new Map({

            basemap: 'arcgis-topographic',
            ground: 'world-elevation'

        });

        const view = new SceneView({

            map: map,
            container: 'divMapa3Di',
            camera: {
                position: {

                    x: 20.457273, //longitude - geo. dužina
                    y: 44.797197, //latitude - geo. širina
                    z: 1000 //Nadmorska visina

                }, 
                tilt: 80
            }

        });

    });

}