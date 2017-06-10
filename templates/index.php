<?php
script('paper', 'script');
style('paper', 'style');
?>

<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('navigation/index')); ?>
		<?php //print_unescaped($this->inc('settings/index')); ?>
	</div>

	<div id="app-content">
		<div class="app-content-list">
			<?php print_unescaped($this->inc('content/index')); ?>
		</div>

        <div class="app-content-detail">This is the article reader.</div>
	</div>
</div>

