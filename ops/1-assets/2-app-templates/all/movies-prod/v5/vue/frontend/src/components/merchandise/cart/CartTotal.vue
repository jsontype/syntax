<template>
  <tbody>
    <tr class="cart-subtotal">
      <th class="border-0"><span class="fw-500">{{ $t("shop.subtotal") }}</span></th>
      <td class="border-0">
        <span>{{ props.finalPrice }}</span>
      </td>
    </tr>
    <tr class="order-total">
      <th class="border-0">
        <span class="fw-500"> Total </span>
      </th>
      <td class="border-0">
        <span class="fw-500 text-primary">{{ props.finalPrice }}</span>
      </td>
    </tr>
  </tbody>
</template>
<script setup>
const props = defineProps({
  finalPrice: { type: String, default: '' },
});
</script>
