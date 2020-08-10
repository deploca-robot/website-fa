<template>
  <div>
    <SubPageHeader title="بازارچه" />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6 mb-4" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]" :key="i">
          <AppCard />
        </div>
      </div>
    </div>

  </div>
</template>