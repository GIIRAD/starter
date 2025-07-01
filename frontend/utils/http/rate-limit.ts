/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable promise/avoid-new */
import type { NextApiResponse } from 'next';
import LRU from 'lru-cache';
import { StatusCode } from '../../../shared/types/status-code';
import ServiceError from '../../../backend/services/utils/service-errors';

type Options = {
  uniqueTokenPerInterval?: number,
  interval?: number,
};

export default function rateLimit(options?: Options): {
  check: (res: NextApiResponse, limit: number, token: string) => Promise<void>,
} {
  const tokenCache = new LRU({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: async (res: NextApiResponse, limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const isRateLimited = tokenCount[0] >= limit;
        res.setHeader('X-RateLimit-Limit', limit);
        res.setHeader(
          'X-RateLimit-Remaining',
          isRateLimited ? 0 : limit - tokenCount[0],
        );

        // eslint-disable-next-line prefer-promise-reject-errors
        return isRateLimited ? void reject(new ServiceError(StatusCode.ClientErrorTooManyRequests, 'to many requests send')) : void resolve();
      }),
  };
}
