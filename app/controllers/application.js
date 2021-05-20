import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  init() {
    throw new Error('Test Error');
  }
}
