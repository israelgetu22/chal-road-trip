const tripTime = (arr) => {
  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: null,
  };

  return result;
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
  {
    name: `Gus's Gas`,
    speedLimits: [
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 97,
        speedLimit: 65,
      },
      {
        distance: 72,
        speedLimit: 70,
      },
      {
        distance: 25,
        speedLimit: 50,
      },
    ],
    traffic: 12,
  },
  {
    name: `Halle's House of Pancakes`,
    speedLimits: [
      {
        distance: 36,
        speedLimit: 50,
      },
      {
        distance: 141,
        speedLimit: 75,
      },
    ],
    traffic: 0,
  },
  {
    name: `Jake's Great Shakes`,
    speedLimits: [
      {
        distance: 100,
        speedLimit: 75,
      },
      {
        distance: 84,
        speedLimit: 70,
      },
      {
        distance: 20,
        speedLimit: 75,
      },
    ],
    traffic: 30,
  },
  {
    name: `Luna's Lunch Counter`,
    speedLimits: [
      {
        distance: 3,
        speedLimit: 35,
      },
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 20,
        speedLimit: 65,
      },
      {
        distance: 85,
        speedLimit: 75,
      },
      {
        distance: 3,
        speedLimit: 65,
      },
      {
        distance: 5,
        speedLimit: 55,
      },
    ],
    traffic: 7,
  },
];

console.log(tripTime(stops));

let object = {
  name: `Jake's Great Shakes`,
  speedLimits: [
    {
      distance: 100,
      speedLimit: 75,
    },
    {
      distance: 84,
      speedLimit: 70,
    },
    {
      distance: 20,
      speedLimit: 75,
    },
  ],
  traffic: 30,
};

let tripTime = 0;
for (let i = 0; i < object.speedLimits.length; i++) {
  object.speedLimits[i]["totalTime"] = (
    object.speedLimits[i]["distance"] / object.speedLimits[i]["speedLimit"]
  ).toPrecision(4);

  tripTime += Number(object.speedLimits[i]["totalTime"]);
}

object["tripTime"] = tripTime;

object["averageSpeedLimits"] = [];
let weightedSpeed = 0;
let denominator = 0;
object.speedLimits.forEach((element) => {
  weightedSpeed += element.speedLimit * element.distance;
  denominator += element.distance;
  object["averageSpeedLimits"].push(weightedSpeed / denominator);
});

weightedAverageSpeed = (weightedSpeed / denominator).toPrecision(4);

object["weightedAverageSpeed"] = weightedAverageSpeed;
console.log(object);
