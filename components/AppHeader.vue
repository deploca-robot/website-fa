<template>
  <headroom :offset="80">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand to="/">
          <img src="//assets.deploca.com/img/brand-48.png" /> deploca
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/marketplace">بازارچه</b-nav-item>
            <b-nav-item to="/developers">توسعه دهندگان</b-nav-item>
            <b-nav-item href="//docs.deploca.com">مستندات</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="//deploca.com" right>English</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </headroom>
</template>