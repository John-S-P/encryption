<?php
	
	/*
	<div class="col-md-4">
		<ul>
			<li class="checkbox">
				<label>
					<input type="checkbox">"one"
				</label>
			</li>
			<li class="checkbox">
				<label>
					<input type="checkbox">"Two"
				</label>
			</li>
			<li class="checkbox">
				<label>
					<input type="checkbox">"Three"
				</label>
			</li>
		</ul>
	</div>
	*/

function generateTestHtml() {
		$html = '<div class="col-md-4">';
		$endTag = '</div>';
		$exampleArray = ['One','Two','Three'];

		// Loop through the array and produce a <li> for each element. Name each checkbox (next to <input>) by the element string. Concatenate each <li> to the $html variable.

		foreach($exampleArray as $value){
			$html .= '<li class="checkbox">
							<label>
								<input type="checkbox">'.$value.'
							</label>
						</li>';
		}

		$html .= $endTag;
		echo $html;

		// After the loop, finish the $html html with the closing div tag by concatenating the $html with $endTag


		// Return $html

	}
?>