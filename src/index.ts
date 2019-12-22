const kinesis = {
  rest: {},
  artifactDetector: {},
  leftArm: {},
  rightArm: {},
  leftHandPinch: {},
  rightHandPinch: {},
  tongue: {},
  jumpingJacks: {},
  leftFoot: {},
  rightFoot: {},
  leftThumbFinger: {},
  leftIndexFinger: {},
  leftMiddleFinger: {},
  leftRingFinger: {},
  leftPinkyFinger: {},
  rightThumbFinger: {},
  rightIndexFinger: {},
  rightMiddleFinger: {},
  rightRingFinger: {},
  rightPinkyFinger: {},
  mentalMath: {},
  bitingALemon: {},
  push: {},
  pull: {},
  lift: {},
  drop: {},
  moveLeft: {},
  moveRight: {},
  moveForward: {},
  moveBackward: {},
  rotateLeft: {},
  rotateRight: {},
  rotateClockwise: {},
  rotateCounterClockwise: {},
  disappear: {}
};

const channelNames = {
  CP6: {},
  F6: {},
  C4: {},
  CP4: {},
  CP3: {},
  F5: {},
  C3: {},
  CP5: {}
};

export const metrics = {
  kinesis,
  predictions: kinesis,
  awareness: {
    creativity: {},
    comprehension: {},
    focus: {},
    meditation: {},
    calm: {}
  },
  brainwaves: {
    raw: {},
    frequency: {},
    powerByBand: {},
    psd: {}
  },
  channelAnalysis: channelNames,
  signalQuality: channelNames,
  emotion: {
    joy: {},
    sadness: {},
    anger: {},
    surprise: {},
    excitement: {},
    disappointment: {},
    fear: {},
    love: {},
    stress: {},
    interest: {}
  },
  facialExpression: {
    smile: {},
    laugh: {},
    frown: {},
    blink: {},
    winkLeft: {},
    winkRight: {}
  },
  status: {
    battery: {},
    charging: {},
    connected: {},
    connectedSince: {},
    connectedLast: {},
    simulate: {},
    ssid: {}
  }
};

export default {
  metrics
};
