<script id="list-template" type="text/x-jsrender">
    {{for  papers}}
    <li class="paper-item {{if active}}active{{/if}}" data-id="{{ id }}">
        <h1>{{:title}}</h1>
        <p>{{:site}}</p>
        <p>{{:description}}</p>
    </li>
    {{/for}}
</script>

<ul></ul>