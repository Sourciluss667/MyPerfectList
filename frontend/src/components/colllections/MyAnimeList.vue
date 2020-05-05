<template>
  <div id="page">
   

    <div class="container is-fluid" id="content">
      <section
        data-section-id="2"
        data-component-id="29e6_13_02_awz"
        data-category="blog"
        class="section"
      >
        
          <h2 class="title has-text-centered" data-config-id="header">
           <p>MyAnimeList collections</p>
          </h2>
          <div class="columns is-multiline" data-config-id="posts_02">
            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7"
                      >25 Jun 2019 | By Dinesh Chugtai</small
                    >
                  </div>
                  <h5 class="title is-6">
                    <a href="#">Why I'm the Best Programmer Ever</a>
                  </h5>
                  <p>
                    I feel like not everybody outside of Pied Piper knows it, so
                    I wanted to make it clear why I'm the best programmer in the
                    world.
                  </p>
                  <a
                    class="button is-primary"
                    href="#"
                    data-config-id="primary-action"
                    >Action</a>
                </div>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7"
                      >25 Jun 2018 | By Bertram Gilfoyle</small
                    >
                  </div>
                  <h5 class="title is-6">
                    <a href="#">Secrets of Decentralization</a>
                  </h5>
                  <p>
                    What makes decentralization so great? Let me enlighten you
                    with my wisdom
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7"
                      >25 Jun 2018 | By Monica Hall</small
                    >
                  </div>
                  <h5 class="title is-6">
                    <a href="#">How Our ICO Almost Failed</a>
                  </h5>
                  <p>
                    This is a short story about how we uncovered an insane
                    problem with our ICO, fixed it, and still managed to secure
                    vast funding.
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7">25 Jun 2018 | By Jared Dunn</small>
                  </div>
                  <h5 class="title is-6">
                    <a href="#">Why Strong Tea Isn't Good For CEOs</a>
                  </h5>
                  <p>
                    An exhaustive guide about how different teas can affect a
                    CEO during their workday.
                  </p>
                </div>
              </div>
            </div>
          </div> 
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmationSiginUp",
  methods: {
    loginOption() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
