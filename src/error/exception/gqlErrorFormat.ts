// graphql.config.ts

import { GraphQLFormattedError } from 'graphql';

export const gqlErrorFormat = (err: GraphQLFormattedError) => {
  if (err.extensions.originalError) {
    return {
      // ...err.extensions.originalError,
      // message: Array.isArray(err.extensions.originalError.message) ? err.extensions.originalError.message[0] : err.extensions.originalError.message,
    };
  } else {
    return { message: err.message };
  }
};
