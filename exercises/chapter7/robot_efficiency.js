/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/



// --- MY WAY --- //
function selectDestination({place, parcels}, from, graph) {
  let sack = parcels.filter(p => p.place == place);
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let dest of graph[at]) {
      if (parcels.some(p => p.place == dest && !sack.includes(p)) ||
          sack.some(p => p.address == dest)) {
        return route.concat(dest);
      }
      if (!work.some(w => w.at == dest)) {
        work.push({at: dest, route: route.concat(dest)});
      }
    }
  }
}

function yourRobot(state, route) {
  if (route.length == 0) route = selectDestination(state, state.place, roadGraph);
  return {direction: route[0], memory: route.slice(1)};
}

let state = VillageState.random(100);
runRobotAnimation(state, yourRobot, []);
//compareRobots(yourRobot, [], goalOrientedRobot, []);



// --- THE SOLUTION --- //
function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {route: findRoute(roadGraph, place, parcel.place),
                pickUp: true};
      } else {
        return {route: findRoute(roadGraph, place, parcel.address),
                pickUp: false};
      }
    });
    // This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
    function score({route, pickUp}) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobotAnimation(VillageState.random(), lazyRobot, []);
