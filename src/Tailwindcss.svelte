<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    html,
    body {
      @apply relative w-full h-full;
    }

    body {
      @apply text-gray-800 m-0 p-4 box-border font-sans;
    }

    p {
      @apply my-4;
    }

    h1 {
      @apply text-4xl font-bold my-2;
    }

    h2 {
      @apply text-2xl font-bold my-3;
    }

    h3 {
      @apply text-lg font-bold my-4;
    }

    h4 {
      @apply text-base font-bold my-5;
    }

    h5 {
      @apply text-sm font-bold my-6;
    }

    h6 {
      @apply text-xs font-bold my-10;
    }

    a {
      @apply text-blue-600 underline;
    }

    a:hover {
      @apply text-blue-400 cursor-pointer;
    }

    label {
      @apply block;
    }

    b,
    strong {
      font-weight: bold;
    }

    input,
    button,
    select,
    textarea {
      @apply p-2 mb-2 box-border border border-solid border-gray-300 rounded;
    }

    input:disabled {
      @apply text-gray-300;
    }

    button {
      @apply text-gray-300 bg-gray-100 outline-none;
    }

    button:disabled {
      @apply text-gray-500;
    }

    button:not(:disabled):active {
      @apply bg-gray-400;
    }

    button:focus {
      @apply border-gray-600;
    }
  }
</style>
