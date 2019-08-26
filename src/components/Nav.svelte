<script>
  export let segment;
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand has-background-grey-light">
    <a class="navbar-item" href="https://sapper.svelte.dev/">
      <img
        src="https://sapper.svelte.dev/sapper-logo-horizontal.svg"
        width="112"
        height="28"
        alt="Sapper" />
    </a>
    <a class="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
        alt="Bulma" />
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item is-tab {segment === undefined ? 'is-active' : ''}" href=".">
        Home
      </a>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <a
        rel="prefetch"
        class="navbar-item is-tab {segment === 'blog' ? 'is-active' : ''}"
        href="blog">
        blog
      </a>

      <a
        class="navbar-item is-tab {segment === 'about' ? 'is-active' : ''}"
        href="about">
        about
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary" href="signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="login">Log in</a>
        </div>
      </div>
    </div>
  </div>
</nav>
