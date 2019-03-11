// ==UserScript==
// @name         AutoTrimps-Steelcrusher
// @version      1.0-Steel
// @namespace    https://github.com/Steelcrusher/AutoTrimps
// @updateURL    https://github.com/Steelcrusher/AutoTrimps/raw/gh-pages/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, SteelCrusher
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *github.com/Steelcrusher/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Steelcrusher';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://SteelCrusher.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
