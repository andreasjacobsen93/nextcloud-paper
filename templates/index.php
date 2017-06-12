<?php
script('paper', 'script');
script('paper', 'strapdown');
style('paper', 'style');
style('paper', 'bootstrap');
?>
<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('navigation/index')); ?>
		<?php //print_unescaped($this->inc('settings/index')); ?>
	</div>

	<div id="app-content">
		<div class="app-content-list">
			<?php print_unescaped($this->inc('content/list')); ?>
		</div>

        <div class="app-content-detail">
            <?php print_unescaped($this->inc('content/reader')); ?>
        </div>
	</div>
</div>

