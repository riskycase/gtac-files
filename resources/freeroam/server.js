"use strict";

bindEventHandler("OnResourceStart", thisResource, (event,resource) => {
	let car = gta.createVehicle(101, new Vec3(-366.94, 239.359, 12.654));
});

addEventHandler("OnPlayerJoined", (event,client) => {
	let skin = Math.floor(Math.random() * 78);
	if (skin >= 26)
		skin += 4;
	spawnPlayer(client, [2495.55, -1687.19, 13.6], 0, 0);
	fadeCamera(client, true);
});
