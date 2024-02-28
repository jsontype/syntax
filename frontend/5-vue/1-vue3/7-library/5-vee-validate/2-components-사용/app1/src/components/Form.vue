<template>
  <Form :validation-schema="schema">
    <div>
      <div>Email</div>
      <Field name="email" type="email" />
      <ErrorMessage name="email" class="errorText" />
    </div>
    <div>
      <div>Password</div>
      <Field name="password" type="password" />
      <ErrorMessage name="password" class="errorText" />
    </div>
    <div>
      <div>Password Confirm</div>
      <Field name="passwordConfirm" type="password" />
      <ErrorMessage name="passwordConfirm" class="errorText" />
    </div>    
    <button>Submit</button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirm: yup
    .string()
    .required()
    .min(6)
    .oneOf([yup.ref('password')]),
  });
</script>

<style scoped>
.errorText {
  color: red;
  margin-left: 5px;
}
</style>
