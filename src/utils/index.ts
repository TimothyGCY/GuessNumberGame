const Utils = {
  generateRandomNumber: (min: number, max: number): number =>
    Math.random() * (max - min) + min
}

export default Utils
