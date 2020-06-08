<template>
  <div class="welcome">
    <!-- <p>
        Welcome to our website !
    </p>-->

    <div
      class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
    >
      <div class="column is-8">
        <article class="panel is-primary  " >
          <p class="panel-heading">Fils d'actualités</p>
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>Anime</a>
            <a>iMDb</a>
            <a>Rottentomatoes</a>
            <a>GoodReads</a>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-primary" type="text" placeholder="Search" />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            bulma
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            marksheet
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            minireset.css
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            jgthms.github.io
          </a>
        </article>
      </div>
      <div class="column is-4">
        <article class="panel is-primary  "  >
          <p class="panel-heading">Followers</p>
          
          <div class="panel-block">
            <!-- <p class="control has-icons-left">
              <input class="input is-primary" type="text" placeholder="Search" />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p> -->
          </div>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Ben
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome2"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
