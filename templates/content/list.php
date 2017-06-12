<script id="list-template" type="text/x-jsrender">
    {{#each papers}}
    <li class="note with-menu {{#if active}}active{{/if}}" data-id="{{ id }}">
        <a href="#">{{ title }}</a>
    </li>
    {{/each}}
</script>

<ul></ul>