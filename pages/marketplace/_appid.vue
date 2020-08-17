<template>
  <div>
    <SubPageHeader title="بازارچه ابری دیپلوکا" />

    <b-container>
      <div class="d-flex justify-content-between align-items-center">
        <h3 class="display-4 mb-4">{{app.name}}</h3>
        <a class="btn btn-default mb-3 mb-sm-0 pulse-default" :href="`//console.deploca.com/apps/${app.key}`">نصب نرم افزار</a>
      </div>
      <p class="text-muted small">
        دسته بندی: <nuxt-link :to="`/marketplace?category=${app.category}`">{{app.category}}</nuxt-link> |
        توسعه دهنده: <nuxt-link :to="`/marketplace?owner=${app.owner}`">{{app.owner}}</nuxt-link> |
        تاریخ انتشار: 1399/05/25 |
        آخرین نسخه: v1.0
      </p>
      <p class="text-justify">{{app.description}}</p>
      <div class="mb-5"></div>

      <b-tabs content-class="mt-3" align="center">
        <b-tab title="درباره نرم افزار" active>
          <p>I'm the first tab</p>
        </b-tab>
        <b-tab title="درباره توسعه دهنده">
          <p>I'm the second tab</p>
        </b-tab>
        <b-tab title="نظرات کاربران" lazy>
          <p>I'm the second tab</p>
        </b-tab>
        <b-tab title="تاریخچه نسخه ها" lazy>
          <p>I'm the second tab</p>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        app: 'apps/appDetails'
      })
    }
  }
</script>