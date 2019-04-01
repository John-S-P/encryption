<?php
	include_once 'generateHTML.php';
	include_once 'testGenerateHtml.php';
	include_once 'encrypt.php';
?>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Encryption Test</title>
  <link rel="stylesheet" href="resources/css/bootstrap.min.css">

</head>

<body>
<!-- MODAL -->
	<div id="frozenAdmissionsAddPlotsModal" role="dialog">
	    <!-- Modal Content -->
	    <div class="modal-content" name="frozenAdmissions">
	        <div class="modal-header">
	            <h3 class="modal-title" style="text-align: center;">Historical Admissions Data</h3>
	        </div>
	        <div class="modal-body container">
	        	<?php
	                	generateAdmissionsHtml();
	                	//generateTestHtml();
	                	encrypttest();
	               	?>
	            <div class="row checkbox-modal">
	                
	                <button type="button" id="submitButton" class="btn btn-primary">Submit</button>
	            </div>
	        </div>
	    </div>
	</div>
</body>
	<script src='resources/js/jquery.js'></script>
	<script src='resources/js/scripts.js'></script>
</html>

<a href="/test.php"></a>