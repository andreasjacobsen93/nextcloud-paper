<?php
script('paper', '3rdparty/jsrender');
script('paper', 'script');
style('paper', 'style');

?>
<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('navigation/index')); ?>
		<?php //print_unescaped($this->inc('settings/index')); ?>
	</div>

	<div id="app-content">
		<div class="app-content-list" id="paper-list">
			<?php print_unescaped($this->inc('content/list')); ?>
		</div>

        <div class="app-content-detail" id="paper-content">
            <?php //print_unescaped($this->inc('content/reader')); ?>
        </div>
	</div>
</div>