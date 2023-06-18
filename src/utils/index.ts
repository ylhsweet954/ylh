export function handleInput(param: string) {
  if (param.includes('||')) {
    const [frameStr, extraStr] = param.split('||');
    const frames = frameStr.split('|');
    const extras = Array.from(extraStr).map(Number);
    return convert(frames).concat(extras);
  } else {
    const frames = param.split('|');
    return convert(frames);
  }
}

function convert(frames: any[]) {
  return frames.map(frame => {
    if (frame.length === 1) {
      return [10];
    } else {
      const [first, second] = frame.split('');
      if (first === '-') {
        return [0, Number(second)];
      } else if (second === '/') {
        return [Number(first), 10 - Number(first)];
      } else if (second === '-') {
        return [Number(first), 0];
      } else {
        return [Number(first), Number(second)];
      }
    }
  }).reduce((prev, curr) => prev.concat(curr), []);
}

export function calculateBowlingScore(scores: any[]) {
  let totalScore = 0;
  let frameIndex = 0;
  for (let frame = 0; frame < 10; frame++) {
    if (scores[frameIndex] === 10) {
      totalScore += 10 + scores[frameIndex + 1] + scores[frameIndex + 2];
      frameIndex += 1;
    } else if (scores[frameIndex] + scores[frameIndex + 1] === 10) {
      totalScore += 10 + scores[frameIndex + 2];
      frameIndex += 2;
    } else {
      totalScore += scores[frameIndex] + scores[frameIndex + 1];
      frameIndex += 2;
    }
  }
  return totalScore;
}

