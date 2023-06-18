class Frame {
  constructor(private scoreString: string) {}

  getFirstBall(): number {
    const first = this.scoreString[0];
    return first === 'X' ? 10 : first === '-' ? 0 : parseInt(first);
  }

  getSecondBall(): number {
    const second = this.scoreString[1];
    const firstBall = this.getFirstBall();
    return second === '/' ? 10 - firstBall : second === '-' ? 0 : parseInt(second);
  }

  isStrike(): boolean {
    return this.scoreString[0] === 'X';
  }

  isSpare(): boolean {
    return this.scoreString[1] === '/';
  }
}

class Line {
  constructor(private framesString: string) {}

  getFrames(): Frame[] {
    return this.framesString.split('|').map(frameString => new Frame(frameString));
  }

  getExtras(): string {
    const index = this.framesString.indexOf('||');
    return index !== -1 ? this.framesString.slice(index + 2) : '';
  }
}

export class BowlingGame {
  calculateScore(lineString: string): number {
    const line = new Line(lineString);
    const frames = line.getFrames();
    const extras = line.getExtras();
    let totalScore = 0;

    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      const firstBall = frame.getFirstBall();
      const secondBall = frame.getSecondBall();

      if (frame.isStrike()) {
        totalScore += 10 + this.getStrikeBonus(i, frames);
      } else if (frame.isSpare()) {
        totalScore += 10 + this.getSpareBonus(i, frames);
      } else {
        totalScore += firstBall + secondBall;
      }
    }

    if (extras) {
      const extraBalls = extras.split('');
      for (let i = 0; i < extraBalls.length; i++) {
        const ball = extraBalls[i];
        const ballScore = ball === 'X' ? 10 : ball === '-' ? 0 : parseInt(ball);
        totalScore += ballScore;
      }
    }

    return totalScore;
  }

  private getStrikeBonus(frameIndex: number, frames: Frame[]): number {
    const nextFrame = frames[frameIndex + 1];
    const nextNextFrame = frames[frameIndex + 2];

    if (nextFrame && nextNextFrame) {
      const firstBall = nextFrame.getFirstBall();
      const secondBall = nextFrame.getSecondBall();
      const nextNextFirstBall = nextNextFrame.getFirstBall();

      return firstBall === 10 ? 10 + nextNextFirstBall : firstBall + secondBall;
    }

    return 0;
  }

  private getSpareBonus(frameIndex: number, frames: Frame[]): number {
    const nextFrame = frames[frameIndex + 1];
    return nextFrame ? nextFrame.getFirstBall() : 0;
  }
}

const bowlingGame = new BowlingGame();
console.log(bowlingGame.calculateScore('X|X|X|X|X|X|X|X|X|X||XX')); // Output: 300
console.log(bowlingGame.calculateScore('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||')); // Output: 90
