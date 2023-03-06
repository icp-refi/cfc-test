export type FieldType = 'string' | 'number' | 'date' | 'boolean' | 'select';

export type FilterField = {
  fieldName: string;
  fieldLabel: string;
  fieldType: FieldType;
  selectOptions?: { value: number | string; text: string }[];
};

export type Filter = {
  field: FilterField;
  operation: 'eq' | 'neq' | 'mt' | 'lt' | 'mte' | 'lte' | 'between';
  value: any;
  second_value?: any;
};