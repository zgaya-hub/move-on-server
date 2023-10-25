import { Column, ColumnOptions, JoinColumn as TJoinColumn, JoinColumnOptions } from 'typeorm';

export const DecimalColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'decimal',
      precision: 3,
      scale: 1,
      default: 0,
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const IntColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'int',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const BigIntColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'bigint',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const VarcharColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'varchar',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const TinyintColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'tinyint',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const TextColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'text',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const EnumColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'enum',
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const ArrayColumn = (options: ColumnOptions): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: ColumnOptions = {
      type: 'text',
      // array: true,
      ...options,
    };

    Column(defaultOptions)(target, propertyName);
  };
};

export const JoinColumn = (options: Pick<JoinColumnOptions, 'name'>): PropertyDecorator => {
  return function (target: Object, propertyName: string | symbol) {
    const defaultOptions: JoinColumnOptions = {
      referencedColumnName: 'ID',
      ...options,
    };

    TJoinColumn(defaultOptions)(target, propertyName);
  };
};
