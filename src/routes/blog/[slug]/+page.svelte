<script lang="ts">
	let { data } = $props();
</script>

<article>
	<svelte:component this={data.component} />
</article>
