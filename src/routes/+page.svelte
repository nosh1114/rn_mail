<script lang="ts">
    export let data;
    let professors = data.professors;
    let inputPrpfessporName = '';
    function sortInputProfessors(name) {
    return professors.filter((professor) => {
      return professor.name.toLowerCase().includes(name.toLowerCase());
    });
  }

    $: filteredProfessors = sortInputProfessors(inputPrpfessporName);
</script>
<section class="bg-white dark:bg-gray-900">
    <form class="flex items-center max-w-sm mx-auto mt-4">   
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>                  
            </div>
            <input bind:value={inputPrpfessporName} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="教授の名前" required />
        </div>
    </form>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {#each filteredProfessors as professor}
                    <a href="/{professor.id}" class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src={professor.profilePictureUrl} alt="Bonnie Avatar">
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a>{professor.name}</a>
                        </h3>
                        <p>{professor.department}</p>
                        <p>{professor.labName}</p>
                    </a>
                {/each}
            </div>  
    </div>
</section>