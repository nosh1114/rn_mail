import adapter from '@sveltejs/adapter-netlify';
// デプロイする際はここを変更する
export default {
  kit: {
    adapter: adapter()
  }
};