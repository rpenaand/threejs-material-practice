import EventEmitter from './EventEmitter';
export default class Time extends EventEmitter {
  start = Date.now();
  current = this.start;
  elapsedTime = 0;
  deltaTime = 16;
  constructor() {
    super();
    window.requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    const curTime = Date.now();
    this.deltaTime = curTime - this.current;
    this.current = curTime;
    this.elapsedTime = this.current - this.start;
    this.trigger('tick');
    window.requestAnimationFrame(this.tick.bind(this));
  }
}
