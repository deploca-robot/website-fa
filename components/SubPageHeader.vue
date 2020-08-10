<template>
  <section class="section-shaped mt-0 mb-5 pb-4">
    <div class="shape shape-style-1 shape-default">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="row">
        <h3 class="display-3 text-white mb-2">{{title}}</h3>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SubPageHeader",
  props: {
    variant: {
      type: String,
      description: "Color variant",
      default: 'default'
    },
    title: {
      type: String,
      description: "Header title"
    }
  }
};
</script>
