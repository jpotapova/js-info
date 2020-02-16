"use strict";
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
const arrayMiddleIndex = Math.floor((styles.length - 1) / 2);
styles[arrayMiddleIndex] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
