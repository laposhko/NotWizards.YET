import mojs from '@mojs/core';
class Star extends mojs.CustomShape {
  getShape() {
    return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
  }
}
mojs.addShape('star', Star);

const RADIUS = 30;
const circle = new mojs.Shape({
  left: 0,
  top: 0,
  stroke: '#FF2400',
  strokeWidth: { [2 * RADIUS]: 0 },
  fill: 'none',
  scale: { 0: 1, easing: 'quad.out' },
  radius: RADIUS,
  duration: 450,
});

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 6: RADIUS - 3 },
  angle: 45,
  children: {
    shape: 'star',
    radius: RADIUS / 2.2,
    fill: '#E62020',
    degreeShift: 'stagger(0,-5)',
    duration: 700,
    delay: 200,
    easing: 'quad.out',
  },
});

const star = new mojs.Shape({
  left: 0,
  top: 0,
  shape: 'star',
  fill: '#E62020',
  scale: { 0: 1 },
  easing: 'elastic.out',
  duration: 1600,
  delay: 300,
  radius: RADIUS / 2.35,
});

const timeline = new mojs.Timeline({ speed: 1.5 });
timeline.add(burst, circle, star);

document.addEventListener('click', function (e) {
  const coords = { x: e.pageX, y: e.pageY };
  burst.tune(coords);
  circle.tune(coords);
  star.tune(coords);
  timeline.replay();
});
setTimeout(() => {
  star.tune({ scale: 0 }).replay();
  const content = document.querySelector('div[data-name="mojs-shape"]');
  content.remove();
}, 600);
