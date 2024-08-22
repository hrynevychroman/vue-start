<script lang="ts" setup>
definePage({
  meta: {
    layout: 'default',
    unauthenticatedOnly: true,
  },
})
</script>

<template>
  <HelloClient />

  {{ $t('mock') }}
</template>
