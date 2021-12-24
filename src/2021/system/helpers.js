const hexagon = (posX, posY, radius) => {
  const rotAngle = 360 / 6
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
}

const pointOnCircle = (posX, posY, radius, angle) => {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return createVector(x, y);
}

const randomSelectTwo = () => {
  const rando = random(1);

  if (rando > 0.5) {
    return true;
  } else {
    return false;
  }
}

const getRandomFromPallete = () => {
  const rando = floor(random(0, PALLETE.length));
  return PALLETE[rando];
}

const testLines = (state) => {
  state.numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
  state.angle = 360 / state.numShapes;

  return ({
    name: 'Test Lines',
    state,
    render: () => {
      push();

      noFill();
      stroke(PALLETE[0])
      if (state.circle) {
        ellipse(0, 0, SIZE);
      }

      stroke(state.layerColour)

      if (state.lines) {
        for (let i = 0; i < state.numShapes; i++) {
          line(0, 0, 0, SIZE / 2);
          rotate(state.angle);
        }
      }
      pop();
    }
  });
}

const myTriangle = (center, radius, direction) => {
  beginShape();
  if (direction) {
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
  } else {
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
  }
  endShape(CLOSE)
}

const layerConstructors = [
  {
    name: 'Outline Shape',
    init: (props) => outlineShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Centered Shape',
    init: (props) => centeredShape({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Circles',
    init: (props) => circles({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Simple Lines',
    init: (props) => simpleLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Dotted Lines',
    init: (props) => dottedLines({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Ring of Shapes',
    init: (props) => ringOfShapes({
      ...props,
      ...setState(state)
    }),
    weight: 0.3
  },
  {
    name: 'Stepped Hexagons',
    init: (props) => steppedHexagons({
      ...props,
      ...setState(state)
    }),
    weight: 0.7
  },
  {
    name: 'Test Lines',
    init: (props) => testLines({
      lines: true,
      circle: true,
      ...props,
      ...setState(state)
    }),
    weight: 1
  }
]

const makeCrystal = (pos) => {
  const layers = layerConstructors.map(lcon => {
    let picker = random(1);
    const draw = picker > lcon.weight;
    return lcon.init({
      pos,
      draw
    });
  });
  return layers;
}

const drawCrystal = (crystal) => {
  crystal.forEach(layer => {
    if (layer.state.draw) {
      push();
      translate(layer.state.pos.x, layer.state.pos.y);
      layer.render();
      pop();
    }
  })
}