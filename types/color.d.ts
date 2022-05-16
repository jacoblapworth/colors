import type { Color } from 'color'

export interface rgbColor {
  alpha?: number
  r: number
  g: number
  b: number
}

export interface Swatch {
  id?: string
  name?: string
  value: rgbColor
}

export interface SwatchSet {
  id?: string
  name?: string
  swatchIds: string[]
}

declare interface ReduxIDState<T> {
  byId: {
    [id: string]: T
  }
  allIds: string[]
}
