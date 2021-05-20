import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-sentry-performance-example/config/environment';

import * as Sentry from '@sentry/ember';

Sentry.InitSentryForEmber({
  beforeSend() {
    console.log('Before send sent.');
  },
});
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
