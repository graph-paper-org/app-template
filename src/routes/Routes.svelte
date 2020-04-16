<script>
import page from 'page';

// Pages
import Index from './index.svelte';
import Explore from './explore.svelte';

let component;
let params;

function setComponent(c) {
  return function setComponentInner({ params: p }) {
    component = c;
    params = p;
  };
}

page('/', setComponent(Index));
page('/#explore', setComponent(Explore));
page({ hashbang: true });
</script>

<svelte:component this={component} bind:params />