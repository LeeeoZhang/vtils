declare module 'yup/es' {
  export interface NumberSchema<T extends number = number>
    extends MixedSchema<T> {
    min(limit: number | Ref, message?: NumberLocale['min']): this

    max(limit: number | Ref, message?: NumberLocale['max']): this

    lessThan(max: number | Ref, message?: NumberLocale['lessThan']): this

    moreThan(min: number | Ref, message?: NumberLocale['moreThan']): this

    positive(message?: NumberLocale['positive']): this

    negative(message?: NumberLocale['negative']): this

    integer(message?: NumberLocale['integer']): this

    truncate(): this

    round(type?: 'floor' | 'ceil' | 'trunc' | 'round'): this
  }

  export function number<T extends number = number>(): NumberSchema<T>
}
