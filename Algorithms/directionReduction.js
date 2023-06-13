function dirReduc(arr) {
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST',
  };
  const newDirections = [];

  for (const direction of arr) {
    if (
      newDirections.length > 0 &&
      opposite[direction] === newDirections[newDirections.length - 1]
    ) {
      newDirections.pop();
    } else {
      newDirections.push(direction);
    }
    console.log(newDirections);
  }
  console.log(newDirections);
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
//dirReduc(['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'WEST']);
