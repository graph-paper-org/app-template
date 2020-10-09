<script>
  import Routes from "./routes/Routes.svelte";
  import Tailwindcss from "./Tailwindcss.svelte";

  export let title;
</script>

<Tailwindcss />

<h1>{title}</h1>

<nav><a href="/">Home</a> <a href="/about">About</a></nav>

<Routes />
