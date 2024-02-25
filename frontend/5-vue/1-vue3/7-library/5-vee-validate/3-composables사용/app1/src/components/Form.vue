<template>
  <form @submit="onSubmit">
    <div>
      <div>Email</div>
      <Input name="email" type="email" />
      <div>PW</div>
      <Input name="password" type="password" />
      <div>PW Confirm</div>
      <Input name="passwordConfirm" type="password" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Input from './Input.vue';

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    passwordConfirm: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref('password')]),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});
</script>
