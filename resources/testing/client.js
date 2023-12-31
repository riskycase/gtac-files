"use strict";

addEventHandler("onKeyUp", function (event, keycode, scancode, mod) {
    switch (keycode) {
        case SDLK_g:
            break;
        case SDLK_h:
            if (localPlayer.isInVehicle) {
                const vehicle = localPlayer.vehicle;
                if (localPlayer === vehicle.getOccupant(0)) {
                    vehicle.velocity = [
                        vehicle.velocity.x,
                        vehicle.velocity.y,
                        vehicle.velocity.z + 0.2,
                    ];
                }
            }
            break;
        case SDLK_2:
            if (localPlayer.isInVehicle) {
                const vehicle = localPlayer.vehicle;
                if (localPlayer === vehicle.getOccupant(0)) {
                    vehicle.velocity = [
                        vehicle.velocity.x * 1.5,
                        vehicle.velocity.y * 1.5,
                        vehicle.velocity.z * 1.5,
                    ];
                }
            }
            break;
        case SDLK_y:
            if (localPlayer.isInVehicle) {
                const vehicle = localPlayer.vehicle;
                if (localPlayer === vehicle.getOccupant(0)) {
                    vehicle.fix();
                }
            }
            break;
        default:
            break;
    }
});

addCommandHandler("v", function (command, text) {
    if (!Number.isNaN(Number.parseInt(text))) {
        createVehicle(Number.parseInt(text), localPlayer);
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
