import type { ColumnDef } from '@tanstack/vue-table'

// Paths to nested properties (intellisense friendly)
export type Paths<T> = T extends object ? { [K in keyof T]:
  `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`
}[keyof T] : never

// Updated tanstack/vue-table types for columnDef
export type TableColumn<TData> = ColumnDef<TData> & { accessorKey: Paths<TData> | '' }

// Remove readonly from a type
export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
}

// Prettify an object
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {}

// Prettify an object recursively
export type PrettifyRecursive<T> = {
  [K in keyof T]: Prettify<T[K]>;
} & {}

// Create an optional property in generic type
// eslint-disable-next-line ts/no-empty-object-type
export type OptionalProperty<T, K extends string> = [T] extends [never] ? {} : { [P in K]: T }
