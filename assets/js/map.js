import 'leaflet/dist/leaflet';

const map = new L.map('map').setView([48.88044551970025, 2.308912083998027], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.Icon.Default.imagePath = './assets/images/leaflet/'

const marker = L.marker([48.88044551970025, 2.308912083998027]).addTo(map);

marker.bindPopup('Parc Monceau');


