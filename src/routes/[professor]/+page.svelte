<script lang="ts">
    export let data;
    import { isUsingSmartphone } from '$lib/utils'
    let professor = data.professor;
    console.log(navigator.userAgent);
</script>
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <img class="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src={professor.profilePictureUrl} alt="Bonnie Avatar">
        <p class="text-center mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">{professor.name}</p>
        <p class="text-center mb-2 font-semibold leading-none text-gray-900 dark:text-white">研究室名</p>
        <p class="text-center mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{professor.labName}</p>
        <dl class="text-center flex flex-col items-center justify-center w-full">
            <div>
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">所属学科</dt>
                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{professor.department}</dd>
            </div>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">研究室の場所</dt>
            <div class="flex items-center space-x-4">
                <div class="text-center flex flex-col items-center justify-center w-full">
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{professor.labPlace}</dd>
                </div>
                <a href="https://www.tuat.ac.jp/documents/tuat/outline/overview/access/fuchu/campus_map/20201002fuchu.pdf">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                    </svg>
                </a>
            </div>
            {#if professor.labUrl}
                <div>
                    <a href={professor.labUrl} target="_blank" rel="noopener noreferrer" class="text-white inline-flex items-center bg-sky-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                        研究室のホームページへ
                    </a>
                </div>
            {/if}
        </dl>        
        <div class="mt-4 mb-40 text-center flex flex-col items-center justify-center w-full">
            {#if isUsingSmartphone(navigator.userAgent)}
                <a href="mailto:{professor.email}" target="_blank" rel="noopener noreferrer" class="text-white inline-flex items-center bg-emerald-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                    メールを送る
                </a>
            {:else}
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${professor.email}`} target="_blank" rel="noopener noreferrer" class="text-white inline-flex items-center bg-emerald-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                    メールを送る
                </a>
            {/if}
        </div>  
    </div>
  </section>