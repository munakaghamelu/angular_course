"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGoalCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches ... intially empty
let theCoaches = [];
// add the coached to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGoalCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
