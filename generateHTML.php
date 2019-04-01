<?php
	include_once 'objectReferences.php';
	include_once 'encrypt.php';

	/**
	 * Echo html that's created
	 */
	function generateAdmissionsHtml() {
		$admissionsQuickFilterReferenceObject = [
		    (object)['Total Students' => (object)[
		        'name' => 'Total',
		        'values' => ['Total'],
		        'friendlyNames' => ['Total Students']
		    ]],
		    (object)['Load' => (object)[
		        'name' => 'LOAD_P_F',
		        'values' => ['F', 'P'],
		        'friendlyNames' => ['Full-time', 'Part-time']
		    ]],
		    (object)['Gender'=> (object)[
		        'name' => 'GENDER',
		        'values' => ['M', 'F'],
		        'friendlyNames'=> ['Male', 'Female']
		    ]],
		    (object)['Division/Candidacy'=> (object)[
		        'name' => 'CANDIDACY_TYPE',
		        'values' => ['newFreshman', 'newUndergraduate', 'newGraduate'],
		        'friendlyNames'=> ['New Freshman', 'New Undergraduate', 'New Graduate']
		    ]],
		    (object)['Stage'=> (object)[
		        'name' => 'DEGREE_CDE',
		        'values' => ['AC', 'AP', 'CAAC', 'CAAP', 'CACF', 'CAREG', 'CF', 'REG', 'RJ', 'WL', 'WLSA', 'WDREG'],
		        'friendlyNames'=> ['Accepted', 'Applied', 'Cancelled After Accepted', 'Cancelled After Applied', 'Cancelled After Registered', 'Confirmed', 'Non-Matriculated', 'Registered', 'Rejected', 'Wait List', 'Wait List Stap Accepted', 'Withdrew after Registered']
		    ]],
		    (object)['Degree'=> (object)[
		        'name' => 'DEGREE_CDE',
		        'values' =>  ['AA', 'AAS', 'ADC', 'ADV', 'BA', 'BA/MS', 'BFA', 'BS', 'BSW', 'MBA', 'MS', 'PHD'],
		        'friendlyNames'=> ['Associate in Arts', 'Associate in Applied Science', 'Advanced Cert - Post Bachelors', 'Advanced Cert - Post Masters', 'Bachelor of Arts', 'BA/MS - 5 Year Program', 'Bachealor of Fine Arts', 'Bachelor of Science', 'Bachelor of Social Work', 'Master of Business Admin', 'Master of Science', 'Doctor of Philosophy']
		    ]],
		    (object)['Department'=> (object)[
		        'name' => 'DEPT_CDE',
		        'values' => ['ACC', 'AHS', 'ART', 'BIO', 'BUS', 'COM', 'CRJ', 'CSC', 'EDU', 'ENG', 'ENV', 'HIS', 'INT', 'LAS', 'MAT', 'MOD', 'MUS', 'NUR', 'PHI', 'POL', 'PSY', 'SOC', 'SPL', 'SWK', 'THA', 'THE', 'UND'],
		        'friendlyNames'=> ['Accounting', 'Allied Health Sciences', 'Art', 'Biology', 'Business', 'Communication Arts', 'Criminal Justice', 'Computer Science', 'Education', 'English', 'Environmental Studies', 'History', 'Interdisciplinary Studies', 'Liberal Arts', 'Math', 'Modern Language', 'Music', 'Nursing', 'Philosophy', 'Political Science', 'Psychology', 'Sociology', 'Speech Language Pathology', 'Social Work', 'Theatre Arts', 'Theology', 'Undeclared']
		    ]]
		];
		
		$html = '';
		
		foreach($admissionsQuickFilterReferenceObject as $outerObject) {
			// get initial object's key
			foreach($outerObject as $outerObjectKey => $value) {

				// Create H1
				$html .= '<h1>'.$outerObjectKey.'</h1>';

				$html .= '<div class="col-md-4">
							<ul>';
				// Go into outer object
					// Get name and declare arrays
						$name = $value -> name;
						$valueArray = $value -> values;
						$friendlyNamesArray = $value -> friendlyNames;
					// Loop through each element in values/friendlyNames array
						for($i=0; $i<sizeof($valueArray); $i++) {
							$html.=
							'<li class="checkbox">
								<label>
									<input type="checkbox" name="'.$name.'" value="'.$valueArray[$i].'">'.$friendlyNamesArray[$i].'
								</label>
							</li>';
						}
						$html .= '</ul>';
			}
			$html .= "</div>";
		}
		echo $html;

	}

?>