import { Logger } from '@aws-lambda-powertools/logger';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { Metrics } from '@aws-lambda-powertools/metrics';
import { Context as LambdaContext } from 'aws-lambda';

export interface Context extends LambdaContext {
    logger: Logger;
    tracer: Tracer;
    metrics: Metrics;
}