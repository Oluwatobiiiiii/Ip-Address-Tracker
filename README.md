# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./Screen%20Shot%202023-08-25%20at%209.49.53%20PM.png)

### Links

- Solution URL: [https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub?share=true](Solution)
- Live Site URL: [https://ip-address-tracker-five-theta.vercel.app/](LiveSite)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Flex
- Vanilla Javascript
- Desktop-first workflow
- Ipfy Api
- Mapbox maps

### What I learned

- I got a better understanding on how to use API
- I got a better understanding on how to use Maps
- I got a better understanding on how to use the css ( position relative and absolute)

```css
.ip-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  gap: 25px;
  position: relative;
  z-index: 99;
  top: 15%;
  max-width: auto;
  /* width: 858px; */
  min-height: 150px;
  background-color: white;
  color: var(---VeryDarkGray--);
  border-radius: 15px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

/* MAPBOX MAPS */
#map {
  position: absolute;
  top: 39%;
  bottom: 0;
  width: 100%;
}
```

```js
//CALLING THE API to get the location of the user
const userIP = async function (inp) {
  try {
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
  } catch (error) {
    console.error(error.message);
  }
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
```

## Author

- Frontend Mentor - [@Oluwatobiiiiii](https://www.frontendmentor.io/profile/Oluwatobiiiiii)
- Twitter - [@Oluwatobicodes](https://www.twitter.com/Oluwatobicodes)
