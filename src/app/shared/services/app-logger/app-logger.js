/*eslint no-console: ["off"] */
import { environment } from '@/environment/environment';

class AppLogger {
  constructor() {
    this.configureLogger();
  }

  configureLogger() {
    if (environment !== 'production') {
      this.log = console.log.bind(console);

      this.debug = console.debug.bind(console);

      this.info = console.info.bind(console);

      this.warn = console.warn.bind(console);

      this.error = console.error.bind(console);

      this.logToServer = this.error;
    } else {
      // In case of production replace the functions definition
      this.log = this.debug = this.info = this.warn = this.error = () => {};

      this.logToServer = err => {
        console.error(err); // temp added to print in the console during production
        // print log to server
      };
    }
  }
}

const logger = new AppLogger();

export { logger };
