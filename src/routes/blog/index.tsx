import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="mx-auto max-w-7xl py-10 px-5 text-center">
      <h1 class="font-sans font-semibold text-7xl">
        Welcome to the Keystatic & Qwik Github test.
      </h1>
      <p class="my-5 text-lg">
        Chechout the blog subfolder in the 
      </p>
      <a class="underline underline-offset-4" href='https://github.com/incacola/qwik-keystatic/' target='_blank'>
          Github Repo
        </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik & Keystatic',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
