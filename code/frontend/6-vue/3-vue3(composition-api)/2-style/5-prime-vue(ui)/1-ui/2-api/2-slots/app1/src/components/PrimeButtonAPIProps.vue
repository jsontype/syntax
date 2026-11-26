<template>
  <div class="card flex justify-content-center flex-wrap gap-3">
    <Button
      v-for="button in buttons"
      :key="button.label"
      :label="button.label"
      :severity="button.severity"
      :badge="button.badge"
      rounded
    />
  </div>
</template>

<script setup>
import Button from "primevue/button"

const buttons = [
  { label: "Primary", severity: null, badge: "1" },
  { label: "Secondary", severity: "secondary", badge: "2" },
  { label: "Success", severity: "success", badge: "3" },
  { label: "Info", severity: "info", badge: "4" },
  { label: "Warning", severity: "warning", badge: "5" },
  { label: "Help", severity: "help", badge: "6" },
  { label: "Danger", severity: "danger", badge: "7" },
  { label: "Contrast", severity: "contrast", badge: "8" },
]
</script>
