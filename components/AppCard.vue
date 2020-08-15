<template>
  <nuxt-link :to="`/marketplace/${app.key}`" v-if="app">
    <card class="border-0" shadow body-classes="py-4">
      <b-media>
        <template v-slot:aside>
          <b-img src="/img/data.svg" width="52"></b-img>
        </template>
        <h6 class="mt-1">{{app.name}}</h6>
        <p class="text-muted small mb-0">دسته: {{app.category}}</p>
      </b-media>
      <p class="description text-justify mt-3">{{app.description}}</p>
    </card>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      app: {}
    }
  }
</script>