<script lang="ts">
    let { data } = $props();
</script>

<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Post</th>
        </tr>
    </thead>
    <tbody>
        {#each data.posts as post}
            <tr>
                <td>{post.date}</td>
                <td><a href="/blog/{post.slug}">{post.title ?? post.slug}</a></td>
            </tr>
        {/each}
    </tbody>
</table>