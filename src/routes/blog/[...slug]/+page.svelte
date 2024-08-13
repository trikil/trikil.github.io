<script>
	let { data } = $props();
</script>

<article>
	<svelte:component this={data.content} />
</article>
