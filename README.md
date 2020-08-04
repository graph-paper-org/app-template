A template for new [graph-paper](https://github.com/graph-paper-org/graph-paper)
apps. Svelte and graph-paper are already configured, along with Storybook, Jest,
ESLint, Prettier, CircleCI, and more.

If you're not interested in graph-paper, this template could alternatively be
used as a generic Svelte template with more features than
[sveltejs/template](https://github.com/sveltejs/template), upon which it is
based.

Run the following to create a new project based on this template:

```
npx degit graph-paper-org/app-template#main graph-paper-app
```

After the project is created, consider adding a LICENSE file with the license of
your choice.

## Developer documentation

Your new project will include [developer documentation](docs/development.md) but
not this README. You may want to create your own README file which links to the
developer documentation.

(We could include the developer documentation right here, but the other parts of
this file won't be especially useful after you initialize your project. degit
also doesn't provide a way for us to replace file contents on-the-fly when you
create a project based on this template.)
