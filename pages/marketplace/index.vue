<template>
  <div>
    <SubPageHeader title="بازارچه ابری دیپلوکا" />

    <b-container>
      <b-row>
        <b-col cols="4">
          <h6>بر اساس دسته بندی</h6>
          <b-list-group>
            <b-list-group-item :to="`?category=1`">عمومی</b-list-group-item>
            <b-list-group-item :to="`?category=2`">مدیریت کسب و کار</b-list-group-item>
            <b-list-group-item :to="`?category=3`">فروشگاه و تجارت الکترونیک</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <b-row>
            <b-col col md="6" sm="12" class="mb-4"
                   v-for="i in apps" :key="i.id">
              <AppCard :app="i" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        apps: 'apps/apps'
      })
    }
  }
</script>