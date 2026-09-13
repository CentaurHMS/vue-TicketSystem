import BasicLayout from '@/layouts/BasicLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const layouts = {
  basic : BasicLayout,
  blank : BlankLayout,
} as const
export type LayoutName = keyof typeof layouts
export const DEFAULT_LAYOUT: LayoutName = 'basic'
