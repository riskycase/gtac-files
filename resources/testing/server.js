"use strict";

addCommandHandler("pos", function (command, text, client) {
    message(
        `You are at ${client.player.position.x},${client.player.position.y},${client.player.position.z} - looking at ${client.player.heading}`
    );
});

addEventHandler("onPedWasted", function (event, ped, attacker, weapon, piece) {
    console.log("Something happened!");
    if (ped.isType(ELEMENT_PLAYER)) {
        message(ped.name + " has died.");
    } else {
        message("A ped has died.");
    }
});

