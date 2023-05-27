<template>
  <div>{{ hello }}</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      hello
    }`,
  },
}
</script>
