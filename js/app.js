// import mapboxgl from "../node_modules/mapbox-gl";
//selected elements
const IpAddress = document.querySelector("#ip-number");
const IpResult = document.querySelector(".inputed-adress");
const IpLocation = document.querySelector(".ip-location");
const IpTimezone = document.querySelector(".ip-timezone");
const IpNetwork = document.querySelector(".ip-network");
const arrowBtn = document.querySelector("#arrow");
// let map = document.querySelector("#map");

//TO CHECK THE INPUTED IP ADDRESS
const validateInputs = function (inputed) {
  if (!Number(inputed) || inputed.length < 11 || inputed) {
    alert("Not a valid IP Address");
  } else {
    console.log("IP Address is valid");
  }
};

//CALLING THE API to get the location of the user
const userIP = async function (inp) {
  //FUNCTION TO SHOW THE RESULT OF THE INPUTED IP ADDRESS
  const ip = await fetch(
    `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_d7PHraagdYPV9IlJEOm1wmQx4gTkQ&ipAddress=${inp}`
  );
  const data = await ip.json();

  //getting the current ip address of the user
  console.log(data);
  const myIp = data.ip;
  const location = data.location.region;
  const timezone = data.location.timezone;
  const isp = data.isp;

  //setting my ip address to show on load
  IpAddress.value = myIp;
  IpResult.innerHTML = myIp;
  IpLocation.innerHTML = location;
  IpTimezone.innerHTML = timezone;
  IpNetwork.innerHTML = isp;

  // FUNCTION TO SHOW THE LOCATION ON THE MAP

  const { lat, lng } = data.location;
  console.log(lat, lng);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY29kaW5nbmluamEiLCJhIjoiY2xscHRwb2g0MDhhajNsbDBua2o2MGc1aiJ9.5UJt0BwVEq8SsGV9ExOVyw";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [lng, lat], // starting position [lng, lat]
    zoom: 15, // starting zoom
  });

  // POP UP BOX
  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat([lng, lat])
    .setHTML("<h1>You are here.👀</h1>")
    .addTo(map);
};

//TO SHOW THE IP ADDRESS ON LOAD
window.addEventListener("load", function () {
  userIP("");
});

//BUTTON EVENT LISTENER TO SHOW EVERYTHING
arrowBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //calling the api to get the location of the inserted ip address
  userIP(IpAddress.value);
});
