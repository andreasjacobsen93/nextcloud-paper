<script id="list-template" type="text/x-jsrender">
    {{#for  papers}}
    <li class="note with-menu {{#if active}}active{{/if}}" data-id="{{ id }}">
        <a href="#">{{:title}}</a>
    </li>
    {{/for}}
</script>

<ul></ul>