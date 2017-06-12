<script id="navigation-tpl" type="text/x-handlebars-template">
    {{#each papers}}
    <li class="note with-menu {{#if active}}active{{/if}}" data-id="{{ id }}">
        <a href="#">{{ title }}</a>
    </li>
    {{/each}}
</script>

<ul></ul>