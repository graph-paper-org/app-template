<script>
  import page from "page";

  import Stack from "@graph-paper/stack";
  import Box from "@graph-paper/box";
  import { Button } from "@graph-paper/button";
  import { LineChart, BarChart, Documentation } from "@graph-paper/icons";
  import Logo from "../components/Logo.svelte";

  // Pages
  import IndexBody from "./index/Body.svelte";
  import IndexSidebar from "./index/Sidebar.svelte";
  import ExploreBody from "./explore/Body.svelte";
  import ExploreSidebar from "./explore/Sidebar.svelte";
  import CompareBody from "./compare/Body.svelte";
  import CompareSidebar from "./compare/Sidebar.svelte";

  let bodyComponent;
  let sidebarComponent;
  let params;

  function setComponent(c, s) {
    return function setComponentInner({ params: p }) {
      bodyComponent = c;
      sidebarComponent = s;
      params = p;
    };
  }

  page("/", setComponent(IndexBody, IndexSidebar));
  page("/explore", setComponent(ExploreBody, ExploreSidebar));
  page("/compare", setComponent(CompareBody, CompareSidebar));
  page({ hashbang: true });

  let logo;
</script>

<header>
  <h1>
    <a href="/">
      <Logo bind:this={logo} />
      Template
    </a>
  </h1>
  <nav style="--pad: var(--space-2x);">
    <Stack space={3} alignItems="stretch" alignContent="stretch">
      <Stack space={1}>
        <h3>Views</h3>
        <Button level="low" dark href="/explore" on:click={logo.rebuildLogo}>
          <LineChart size={14} />
          Explore
        </Button>
        <Button level="low" dark href="/compare" on:click={logo.rebuildLogo}>
          <BarChart size={14} />
          Compare
        </Button>
      </Stack>
      <div style="align-self: stretch; height: 100%;">
        <Stack space={1}>
          <svelte:component this={sidebarComponent} bind:params />
        </Stack>
      </div>
      <div style="align-self: end;">
        <Stack space={1}>
          <Button level="low" dark href="/#">
            <LineChart size={14} />
            Feedback
          </Button>
          <Button level="low" dark href="/#">
            <Documentation size={14} />
            Documentation
          </Button>
        </Stack>
      </div>
    </Stack>
  </nav>
</header>
<main>
  <h2>Body View</h2>
  <Box padding={2}>
    <svelte:component this={bodyComponent} bind:params />
  </Box>
</main>
