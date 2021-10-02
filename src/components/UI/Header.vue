<template>
  <header class="header-theme">
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
      <a class="navbar-brand">MyFeeds</a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/user/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user/posts">Posts</router-link>
          </li>
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </header>
</template>