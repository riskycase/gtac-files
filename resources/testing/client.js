"use strict";

addEventHandler("onPedWasted", function (event, ped, attacker, weapon, piece) {
    if (ped.isType(ELEMENT_PLAYER)) {
        message(ped.name + " has died.");
    } else {
        message("A ped has died.");
    }
});

addEventHandler("onKeyUp", function (event, keycode, scancode, mod) {
    if(keycode === SDLK_g) {
        console.log(`Pressed g`);
    } else {
        console.log(`${keycode} ${scancode}`)
    }
});
