<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <MenubarTrigger
    data-slot="menubar-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-accent focus:text-accent-foreground  flex items-center justify-center w-full  rounded-sm outline-hidden select-none',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
