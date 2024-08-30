<script>
	import "$lib/styles/style.scss";
</script>

<div class="background">
	<div class="header">
		<div class="left"></div>
		<div class="center">
			<h1>lint&rsquo;s web thing</h1>
		</div>
		<div class="right">
			<span class="material-symbols-outlined">rss_feed</span>
			<img
				src="/static/github-mark.svg"
				alt="GitHub logo"
				width="20px"
				height="20px"
				style="margin: 2px;"
			/>
		</div>
	</div>

	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.content {
		background-color: var(--base3);
		padding: 20px 50px;
	}

	.background {
		min-height: 100vh;
		box-sizing: border-box;
		background-image: url("/static/nnnoise-alt.svg");
	}

	@media screen and (min-width: 768px) {
		.background {
			padding: 50px;
		}

		.content {
			border: 3px solid var(--base1);
		}
	}

	.header {
		color: var(--base3);
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		h1 {
			font-family: "Fredericka the Great";
			font-size: 42px;
			text-align: center;
			color: var(--base3);
			margin: 10px 0;
		}

		.right {
			display: flex;
			gap: 20px;
		}
	}
</style>
