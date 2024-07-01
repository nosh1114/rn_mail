<script src="../path/to/flowbite/dist/flowbite.min.js">
    import "../app.css";
</script>
  <svelte:head>
    <title>RnMails</title>
    <meta name="description" content="教授のメールを探しやすくなるアプリです" />
  </svelte:head>
  <header class="flex items-center justify-between px-6 py-4 bg-indigo-500">
    <h1 class="text-2xl font-bold text-white">RnMails</h1>
    <nav class="flex gap-4">
      <a href="/" class="text-white hover:text-gray-400">home</a>
      <a href="/about" class="text-white hover:text-gray-400">About</a>
    </nav>
  </header>
  
  <slot />
  
  <footer class="bg-black py-2 text-center text-white">
    <p>@Shibata Naoki</p>
  </footer>