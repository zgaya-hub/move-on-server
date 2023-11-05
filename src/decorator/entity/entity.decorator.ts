import { Column, ColumnOptions, JoinColumn as TJoinColumn, JoinColumnOptions } from 'typeorm';
import { snakeCase } from 'lodash';

export const DecimalColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'decimal',
      name: snakeCase(propertyName.toString()),
      precision: 3,
      scale: 1,
      default: 0,
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const IntColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'int',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const BigIntColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'bigint',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const VarcharColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'varchar',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const UuidColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'uuid',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const TinyintColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'tinyint',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const TextColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'text',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const EnumColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'enum',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const ArrayColumn = (options?: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'text',
      name: snakeCase(propertyName.toString()),
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const JoinColumn = (options?: JoinColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: JoinColumnOptions = {
      referencedColumnName: 'ID',
      name: snakeCase(propertyName.toString() + '_id'),
      ...options,
    };

    TJoinColumn(defaultOptions)(target, propertyName);
  };
};
