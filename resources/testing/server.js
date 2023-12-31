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

addCommandHandler("v", function (command, text, client) {
    if (!Number.isNaN(Number.parseInt(text))) {
        createVehicle(Number.parseInt(text), client.player);
    }
});

function createVehicle(id, player) {
    if (player.isInVehicle) {
        message("Get out of the current vehicle first!");
    } else {
        const vehicle = gta.createVehicle(id, player.position);
        vehicle.heading = player.heading;
        vehicle.netFlags.transient = true;
        vehicle.netFlags.alwaysExistForSyncer = false;
        addToWorld(vehicle);
        player.warpIntoVehicle(vehicle, 0);
    }
}
