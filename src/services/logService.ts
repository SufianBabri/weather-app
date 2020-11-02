import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';

function init() {
	Sentry.init({
		dsn: "https://2687bacd497849308ede34f64e4e1ad5@o464933.ingest.sentry.io/5496633",
		integrations: [new Integrations.BrowserTracing()],

		// We recommend adjusting this value in production, or using tracesSampler
		// for finer control
		tracesSampleRate: 1.0,
	});
}

function log(error: any) {
	console.log('uncaught error', error);
	Sentry.captureException('Logging the error', error);
}

export default {
	init,
	log,
};
