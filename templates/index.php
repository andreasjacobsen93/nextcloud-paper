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
		<div id="app-content-list">
			<?php print_unescaped($this->inc('content/index')); ?>
		</div>

        <div id="app-content-detail"></div>
	</div>
</div>

