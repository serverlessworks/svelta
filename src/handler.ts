
import { Metrics } from '@aws-lambda-powertools/metrics';
import { Logger } from '@aws-lambda-powertools/logger';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { Context } from 'lib/Context';

const namespace = 'ProjectNamespace';
const serviceName = 'MyFunctionWithHandler';

const metrics = new Metrics({ namespace: namespace, serviceName: serviceName });
const logger = new Logger({ logLevel: 'INFO', serviceName: serviceName });
const tracer = new Tracer({ serviceName: serviceName });

export const handler = async (event: unknown, context: Context): Promise<void> => {
    context.logger = logger
    context.tracer = tracer
    context.metrics = metrics
};