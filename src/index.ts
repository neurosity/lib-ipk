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
  channelAnalysis: {
    FC1: {},
    FC2: {},
    FC3: {},
    FC4: {},
    CP1: {},
    CP2: {},
    CP3: {},
    CP4: {}
  },
  signalQuality: {
    FC1: {},
    FC2: {},
    FC3: {},
    FC4: {},
    CP1: {},
    CP2: {},
    CP3: {},
    CP4: {}
  },
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
