<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Icon } from '@/icons'
import { cn } from '@/utils'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  block?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    :as
    :as-child
    :class="cn(buttonVariants({ variant, size }), {
      'w-full': block,
    }, props.class)"
    :disabled="loading"
  >
    <Icon v-if="loading" icon="formulr:loader" width="1rem" height="1rem" class="me-2 animate-spin" />
    <slot />
  </Primitive>
</template>
