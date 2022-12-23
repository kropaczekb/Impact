<script>
  import app from '../src/index'
  import Main from './routes/Main.svelte'
  import { Router, Route, Link } from "svelte-routing";
  import { onMount } from 'svelte';
  export let url = "";
  onMount(async () => {

  })

</script>

<Router url="{url}">
  <nav id="nav-bar">
    <h1>Impact</h1>
    <Link to="/">Home</Link>
  </nav>
  <div>
    <Route path="/" component="{Main}" />
  </div>
</Router>

<style>
  #nav-bar {
    display: flex;
    background-color: grey;
  }
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>
