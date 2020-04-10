<script>
import page from 'page';
import Index from './index.svelte';
import Explore from './explore.svelte';

let component;
page('/', (p) => {
  if (p.hash === 'explore') {
    component = Explore;
  } else {
    component = Index;
  }
});
page.start();
</script>

<svelte:component this={component} />