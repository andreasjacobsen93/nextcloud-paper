<script id="list-template" type="text/x-jsrender">
    {{for  papers}}
    <li class="paper-item {{if active}}active{{/if}}" data-id="{{ id }}">
        <h1 class="paper-item-title">{{:title}}</h1>
        <p class="paper-item-info">{{:site}} - {{:author}} - {{:published}}</p>
        <p class="paper-item-description">{{:description}}</p>
    </li>
    {{/for}}
</script>

<ul></ul>