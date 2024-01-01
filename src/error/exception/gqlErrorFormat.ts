import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLFormattedError } from 'graphql';

interface ValidationErrorInterface {
  statusCode: 400;
  message: string[] | string;
  error: string;
}

export const gqlErrorFormat = (formattedError: GraphQLFormattedError): GraphQLFormattedError => {
  if (formattedError.extensions.code === ApolloServerErrorCode.BAD_REQUEST) {
    const errors = formattedError.extensions.originalError as ValidationErrorInterface;
    if (Array.isArray(errors.message)) {
      const messagesArray = errors.message.map(removeExceptionMark);
      return {
        message: messagesArray.join('\n'),
      };
    }
    return {
      message: removeExceptionMark(errors.message),
    };
  }

  return {
    message: removeExceptionMark(formattedError.message),
  };
};

const removeExceptionMark = (message: string) => {
  const splittedMessage = message.split(':');
  if (splittedMessage.length > 1) {
    splittedMessage.shift();
    return splittedMessage.join('');
  }
  return message;
};
