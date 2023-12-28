"use strict";

addCommandHandler("pos", function (command, text, client) {
    message(
        `You are at ${client.player.position.x},${client.player.position.y},${client.player.position.z} - looking at ${client.player.heading}`
    );
});

addCommandHandler("v", function (command, text, client) {
    if (!Number.isNaN(Number.parseInt(text))) {
        const vehicle = gta.createVehicle(Number.parseInt(text), client.player.position);
        addToWorld(vehicle);
        client.player.warpIntoVehicle(vehicle, 0);
    }
});


