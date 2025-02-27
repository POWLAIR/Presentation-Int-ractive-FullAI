<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  change: {
    type: String,
    default: ''
  },
  positive: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="glass-card stat-card">
    <div class="stat-icon" v-html="icon"></div>
    <div class="stat-label">{{ label }}</div>
    <div class="stat-value">{{ value }}</div>
    <div v-if="change" class="stat-change" :class="{ positive, negative: !positive }">
      {{ change }}
    </div>
  </div>
</template>