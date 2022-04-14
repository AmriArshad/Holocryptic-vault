const state = {
  sides: SIDES,
  stepsOut: 8,
  thinStroke: 1,
  thickStroke: 3,
}

const setState = (state) => {
  state.numShapes = state.sides;
  state.angle = 360 / state.numShapes;
  state.singleStep = (SIZE / 2) / state.stepsOut;
  state.layerColour = getRandomFromPallete();
  return state;
}

const circles = (state) => {
  state.shapeSize = (SIZE / 2) * 0.93;
  state.position = SIZE / 2 - state.shapeSize / 2;

  return ({
    name: 'Circles',
    state,
    render: () => {
      push();
      stroke(state.layerColour);
      strokeWeight(1);
      noFill();

      for (let i = 0; i <= state.numShapes; i++) {
        ellipse(state.position, 0, state.shapeSize);
        rotate(state.angle);
      }
      pop();
    }
  });
}

const simpleLines = (state) => {
  state.numSteps = randomSelectTwo() ? state.stepsOut : int(state.stepsOut * 1.25);
  state.step = (SIZE / 2) / state.numSteps;
  state.start = floor(random(0, state.numSteps));
  state.stop = floor(random(state.start, state.numSteps + 1));
  state.numShapes = randomSelectTwo() ? state.sides : state.sides * 2;
  state.weight = randomSelectTwo() ? state.thinStroke : state.thickStroke;
  state.angle = 360 / state.numShapes;

  return ({
    name: 'Simple Lines',
    state,
    render: () => {
      push();
      stroke(state.layerColour);
      strokeWeight(state.weight);
      noFill();

      for (let i = 0; i < state.numShapes; i++) {
        line(state.start * state.step, 0, state.stop * state.step, 0);
        rotate(state.angle);
      }
      pop();
    }
  });
}

const outlineShape = (state) => {
  state.weight = randomSelectTwo() ? state.thinStroke : state.thickStroke;
  state.hexagonTrue = randomSelectTwo();

  return ({
    name: 'Outline Shape',
    state,
    render: () => {
      push();
      strokeWeight(state.weight);
      stroke(state.layerColour);
      noFill();

      if (state.hexagonTrue) {
        hexagon(0, 0, SIZE / 2);
      } else {
        ellipse(0, 0, SIZE);
      }
      pop();
    }
  })
}

const dottedLines = (state) => {

  state.numShapes = randomSelectTwo() ? state.sides : state.sides * 2;
  state.angle = 360 / state.numShapes;
  state.shapeSize = 3;
  state.centerOffset = state.singleStep;


  return ({
    name: 'Dotted Lines',
    state,
    render: () => {
      push();
      fill(state.layerColour);
      noStroke();

      for (let i = 0; i <= state.numShapes; i++) {
        for (let x = state.centerOffset; x < SIZE / 2; x += state.singleStep) {
          rect(x, 0, state.shapeSize);
        }
        rotate(state.angle);
      }
      pop();
    }
  })
}

const centeredShape = (state) => {
  state.randomShape = random(1);
  state.shapeSize = floor(random(state.stepsOut / 2, state.stepsOut - 2)) * state.singleStep;

  return ({
    name: 'Centered Shape',
    state,
    render: () => {
      push();
      fill(state.layerColour);
      noStroke();

      if (state.randomShape < 0.1) {
        rect(0, 0, state.shapeSize * 2);
      } else if (state.randomShape < 0.6) {
        ellipse(0, 0, state.shapeSize * 2);
      } else {
        rotate(state.angle / 2);
        hexagon(0, 0, state.shapeSize);
      }
      pop();
    }
  });
}

const ringOfShapes = (state) => {
  state.steps = floor(random(1, state.stepsOut));
  state.center = state.steps * state.singleStep;
  state.randomShape = random(1);
  state.direction = randomSelectTwo();
  state.fillColour = randomSelectTwo() ? state.layerColour : color(0, 1);
  state.weight = randomSelectTwo() ? state.thinStroke : state.thickStroke;

  if (state.steps < state.stepsOut / 2) {
    state.radius = floor(random(1, state.steps)) * state.singleStep;
  } else if (state.steps > state.stepsOut / 2) {
    state.radius = floor(random(1, state.stepsOut - state.steps)) * state.singleStep;
  } else {
    state.radius = floor(random(1, (state.stepsOut / 2) + 1)) * state.singleStep;
  }

  return ({
    name: 'Ring Of Shapes',
    state,
    render: () => {
      push();
      stroke(state.layerColour);
      fill(state.fillColour);
      strokeWeight(state.weight);

      for (let i = 0; i < state.numShapes; i++) {
        if (state.randomShape < 0.33) {
          ellipse(0, state.center, state.radius);
        } else if (state.randomShape < 0.66) {
          rect(0, state.center, state.radius);
        } else {
          myTriangle(state.center, state.radius, state.direction);
        }
        rotate(state.angle);
      }
      pop();
    }
  });
}

const steppedHexagons = (state) => {
  state.numSteps = randomSelectTwo() ? state.stepsOut : state.stepsOut * 1.25;
  state.centerOffset = (SIZE / 2) * 0.15;
  state.singleStep = (SIZE / 2 - state.centerOffset) / state.numSteps;
  state.weight = randomSelectTwo() ? state.thinStroke : state.thickStroke;

  return ({
    name: 'Stepped Hexagons',
    state,
    render: () => {
      push();
      stroke(state.layerColour);
      noFill();
      strokeWeight(state.weight);

      rotate(state.angle / 2);
      for (let i = 1; i < state.numSteps + 1; i++) {
        hexagon(0, 0, state.centerOffset + (i * state.singleStep));
      }
      pop();
    }
  });
}