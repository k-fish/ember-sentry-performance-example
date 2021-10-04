import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-sentry-performance-example/config/environment';

import * as Sentry from '@sentry/ember';

Sentry.init({
  dsn: 'https://9a144ade627748309afe5ec5c1290f84@o408219.ingest.sentry.io/5776415',
  tracesSampleRate: 1.0,
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
