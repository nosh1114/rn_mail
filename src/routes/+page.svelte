<script lang="ts">
    export let data;
    let professors = data.professors;
</script>
{#if professors.length > 0}
    {#each professors as professor}
        <a href="/professor/{professor.id}">
            <div>
                <h2>{professor.name}</h2>
            </div>
        </a>
    {/each}
{/if}