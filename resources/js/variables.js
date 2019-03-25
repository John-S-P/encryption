// RADIO BUTTONS
// Bargraph & Linegraph
var Enrollment_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Enrollment-bargraph-radio"]');
var Enrollment_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Enrollment-linegraph-radio"]');
var Enrollment_LIVE_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Enrollment-bargraph-radio-live"]');
var Enrollment_LIVE_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Enrollment-linegraph-radio-live"]');
var Admissions_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Admissions-bargraph-radio"]');
var Admissions_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Admissions-linegraph-radio"]');
var Admissions_LIVE_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Admissions-bargraph-radio-live"]');
var Admissions_LIVE_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Admissions-linegraph-radio-live"]');
var Degree_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Degree-bargraph-radio"]');
var Degree_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Degree-linegraph-radio"]');
var Degree_LIVE_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Degree-bargraph-radio-live"]');
var Degree_LIVE_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Degree-linegraph-radio-live"]');
var Financial_BARGRAPH_RADIO_BUTTON = document.querySelector('input[id="Financial-bargraph-radio"]');
var Financial_LINEGRAPH_RADIO_BUTTON = document.querySelector('input[id="Financial-linegraph-radio"]');

// Headcount & Creditcount
var Enrollment_HEADCOUNT_RADIO_BUTTON = document.querySelector('input[id="Enrollment-headcount-radio"]');
var Enrollment_CREDITCOUNT_RADIO_BUTTON = document.querySelector('input[id="Enrollment-creditcount-radio"]');
var Admissions_LIVE_HEADCOUNT_RADIO_BUTTON = document.querySelector('input[id="Admissions-live-headcount-radio"]')
var Admissions_LIVE_CREDITCOUNT_RADIO_BUTTON = document.querySelector('input[id="Admissions-live-creditcount-radio"]')
var Degree_LIVE_HEADCOUNT_RADIO_BUTTON = document.querySelector('input[id="Degree-live-headcount-radio"]')
var Degree_LIVE_CREDITCOUNT_RADIO_BUTTON = document.querySelector('input[id="Degree-live-creditcount-radio"]')
var Enrollment_LIVE_HEADCOUNT_RADIO_BUTTON = document.querySelector('input[id="Enrollment-live-headcount-radio"]')
var Enrollment_LIVE_CREDITCOUNT_RADIO_BUTTON = document.querySelector('input[id="Enrollment-live-creditcount-radio"]')

// Time Filters
var Enrollment_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Enrollment-radio-filter-time-container");
var Enrollment_LIVE_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Enrollment-radio-filter-time-container-live");
var Admissions_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Admissions-radio-filter-time-container");
var Admissions_LIVE_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Admissions-radio-filter-time-container-live");
var Degree_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Degree-radio-filter-time-container");
var Degree_LIVE_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Degree-radio-filter-time-container-live");
var Financial_TIME_FILTER_RADIO_CONTAINER = document.getElementById("Financial-checkbox-filter-container");

// BUTTONS/TABS
var FILTER_ENROLLMENT_BUTTON = document.querySelector('#filter-semester-button');
var FILTER_LIVE_ENROLLMENT_BUTTON = document.querySelector('#filter-enrollment-live-button');
var FILTER_ETHNICITY_BUTTON = document.querySelector('#filter-ethnicity-button');
var FILTER_ADMISSIONS_BUTTON = document.querySelector('#filter-admissions-button');
var FILTER_LIVE_ADMISSIONS_BUTTON = document.querySelector('#filter-admissions-live-button');
var FILTER_DEGREE_BUTTON = document.querySelector('#filter-degree-button');
var FILTER_LIVE_DEGREE_BUTTON = document.querySelector('#filter-degree-live-button');
var FILTER_FINANCIAL_BUTTON = document.querySelector('#filter-financial-button');

// OTHER ELEMENTS
var firstYearEthnicitySelect = document.querySelector('#first-year-ethnicity-select');
var secondYearEthnicitySelect = document.querySelector('#second-year-ethnicity-select');


// ************************************************************************
//    POST-REQUEST
// ************************************************************************

// CHECKBOXES
/*
var enrollmentTotalCheckbox = document.querySelector('input[id="checkbox-by-semester-total"]');
var enrollmentUndergraduateCheckbox = document.querySelector('input[id="checkbox-by-semester-undergraduate"]');
var enrollmentGraduateCheckbox = document.querySelector('input[id="checkbox-by-semester-graduate"]');
var enrollmentDoctorateCheckbox = document.querySelector('input[id="checkbox-by-semester-doctorate"]');
var enrollmentFullTimeCheckbox = document.querySelector('input[id="checkbox-by-semester-full-time"]');
var enrollmentPartTimeCheckbox = document.querySelector('input[id="checkbox-by-semester-part-time"]');
*/

// GLOBALS

// TO RESET
var variableArray = []; // commonly will contain imbedded arrays
var variableNameArray = [];0

// OBJECTS  - REFERENCES
var EnrollmentQuickFilterReferenceObject = {
    'Total Students': {
        'Total': ['Total'],
        'names': ['Total Students']
    },
    'Division': {
        'DIV_CDE': ['UG', 'GR', 'DO', 'HS'],
        'names': ['Undergraduate', 'Graduate', 'Doctorate', 'High School']
    },
    'Load': {
        'FT_PT': ['F', 'P'],
        'names': ['Full Time', 'Part Time']
    },
    'Gender': {
        'GENDER': ['M', 'F'],
        'names': ['Male', 'Female']
    },
    'Resident': {
        'RESIDENT': ['Y', 'N'],
        'names': ['Resident', 'Non-resident']
    },
    'Nursing': {
        'NURSING': ['Y', 'N'],
        'names': ['Nursing', 'Non-nursing']
    },
    'Expected Graduation': {
        'EXPECTED_GRAD_DTE': ['2018 FA', '2019 SP', '2019 FA', '2020 SP', '2020 FA', '2021 SP', '2021 FA', '2022 SP', '2022 FA'],
        'names': ['2018 FA', '2019 SP', '2019 FA', '2020 SP', '2020 FA', '2021 SP', '2021 FA', '2022 SP', '2022 FA']
    },
    'Student Type': {
        'STUD_TYPE': ['C', 'F', 'G', 'T'],
        'names': ['Continuing Student', 'New Freshman', 'New Graduate', 'New Transfer']
    },
    'Class': {
        'CLASS_CDE': ['FR', 'SO', 'JR', 'SR', 'DO', 'GR', 'NG', 'NU', 'PM', 'S+', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
        'names': ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Doctoral', 'Graduate', 'NonDegree-Graduate', 'NonDegree-Undergraduate', 'Post Masters', 'Sophomore Plus/AA AAS', '5 Yr Program 1st year', '5 Yr Program 2nd Year', '5 Yr Program 3rd Year', '5 Yr Program 4th Year', '5 Yr Program 4th Year', '5 Yr Program 5th Year']
    },
    'Degree': {
        'DEGR_CDE': ['AA', 'AAS', 'ADC', 'ADV', 'BA', 'BA/MS', 'BFA', 'BS', 'BSW', 'DNP', 'EDD', 'MBA', 'MS', 'ND', 'NDHS', 'NDPD', 'PHD'],
        'names': ['Associate in Arts', 'Associate in Applied Science', 'Advanced Cert - Post Bachelors', 'Advanced Cert - Post Masters', 'Bachelor of Arts', 'BA/MS - 5 Year Program', 'Bachealor of Fine Arts', 'Bachelor of Science', 'Bachelor of Social Work', 'Doctor of Nursing Practice', 'Doctor of Education', 'Master of Business Admin', 'Master of Science', 'Non-degree', 'Non-degree High School', 'Non-degree Profressional Development', 'Doctor of Philosophy']
    },
    'Ethnicity': {
        'ETHNICITY': ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanics of any race', 'Native Hawaiian or Other Pacific Islander', 'Nonresident Alien', 'Race and Ethnicity unknown', 'Two or more races', 'White'],
        'names': ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanics of any race', 'Native Hawaiian or Other Pacific Islander', 'Nonresident Alien', 'Race and Ethnicity unknown', 'Two or more races', 'White']
    },
    'Tuition': {
        'TUITION_CDE': ['DE', 'EM', 'HO', 'HS', 'IE', 'IP', 'SP'],
        'names': ['Dependents/Relatives', 'Employee', 'Honors Student', 'HS Scholars Discount', 'Institute - Ed Tech Specialist Cohort', 'Institute - Professional Dev', 'SAP 100 Only Charge Reg Fee Only']
    }
};

var AdmissionsQuickFilterReferenceObject = {
    'Total Students': {
        'Total': ['Total'],
        'names': ['Total Students']
    },
    'Load': {
        'LOAD_P_F': ['F', 'P'],
        'names': ['Full-time', 'Part-time']
    },
    'Gender': {
        'GENDER': ['M', 'F'],
        'names': ['Male', 'Female']
    },
    'Division/Candidacy': {
        'CANDIDACY_TYPE': ['newFreshman', 'newUndergraduate', 'newGraduate'],
        'names': ['New Freshman', 'New Undergraduate', 'New Graduate']
    },
    'Stage': {
        'STAGE': ['AC', 'AP', 'CAAC', 'CAAP', 'CACF', 'CAREG', 'CF', 'REG', 'RJ', 'WL', 'WLSA', 'WDREG'],
        'names': ['Accepted', 'Applied', 'Cancelled After Accepted', 'Cancelled After Applied', 'Cancelled After Registered', 'Confirmed', 'Non-Matriculated', 'Registered', 'Rejected', 'Wait List', 'Wait List Stap Accepted', 'Withdrew after Registered']
    },
    'Degree': {
        'DEGREE_CDE': ['AA', 'AAS', 'ADC', 'ADV', 'BA', 'BA/MS', 'BFA', 'BS', 'BSW', 'MBA', 'MS', 'PHD'],
        'names': ['Associate in Arts', 'Associate in Applied Science', 'Advanced Cert - Post Bachelors', 'Advanced Cert - Post Masters', 'Bachelor of Arts', 'BA/MS - 5 Year Program', 'Bachealor of Fine Arts', 'Bachelor of Science', 'Bachelor of Social Work', 'Master of Business Admin', 'Master of Science', 'Doctor of Philosophy']
    },
    'Department': {
        'DEPT_CDE': ['ACC', 'AHS', 'ART', 'BIO', 'BUS', 'COM', 'CRJ', 'CSC', 'EDU', 'ENG', 'ENV', 'HIS', 'INT', 'LAS', 'MAT', 'MOD', 'MUS', 'NUR', 'PHI', 'POL', 'PSY', 'SOC', 'SPL', 'SWK', 'THA', 'THE', 'UND'],
        'names': ['Accounting', 'Allied Health Sciences', 'Art', 'Biology', 'Business', 'Communication Arts', 'Criminal Justice', 'Computer Science', 'Education', 'English', 'Environmental Studies', 'History', 'Interdisciplinary Studies', 'Liberal Arts', 'Math', 'Modern Language', 'Music', 'Nursing', 'Philosophy', 'Political Science', 'Psychology', 'Sociology', 'Speech Language Pathology', 'Social Work', 'Theatre Arts', 'Theology', 'Undeclared']
    }
};

var DegreeQuickFilterReferenceObject = {
    'Total Students': {
        'Total': ['Total'],
        'names': ['Total Degrees']
    },
    'Degree': {
        'DEGR_CDE': ['AA', 'AAS', 'ADC', 'ADV', 'BA', 'BA/MS', 'BS/MS', 'BFA', 'BS', 'BSW', 'MBA', 'MS', 'PHD'],
        'names': ['Associate in Arts', 'Associate in Applied Science', 'Advanced Cert - Post Bachelors', 'Advanced Cert - Post Masters', 'Bachelor of Arts', 'BA/MS - 5 Year Program', 'BS/MS - 5 Year Program', 'Bachealor of Fine Arts', 'Bachelor of Science', 'Bachelor of Social Work', 'Master of Business Admin', 'Master of Science', 'Doctor of Philosophy']
    },
    'Degree Subgroups': {
        'DEGR_SUBGRP': ["Bachelors Degrees", "Masters Degrees", "Doctorates Degrees", 'Associates Degrees', 'Advanced Certificates', 'Non-degrees'],
        'names': ["Bachelor's Degrees", "Master's Degrees", "Doctorate's Degrees", 'Associates Degrees', 'Advanced Certificates', 'Non-degrees']
    },
    'Major': {
        'MAJOR_1_CIP': ['9', '11', '13', '16', '23', '24', '26', '27', '38', '42', '43', '44', '45', '50', '51', '52', '54'],
        'names': ['Communications, Journalism, and Related Programs', 'Computer and Information Sciences and Support Services', 'Education', 'Foreign Languages, Literatures, and Linguistics', 'English Language and Literature/Letters', 'Liberal Arts and Sciences, General Studies, and Humanities', 'Biological and Biomedical Sciences', 'Mathematics and Statistics', 'Philosophy and Religious Studies', 'Psychology', 'Homeland Security, Law Enforcement, Firefighting and Related Protective Services', 'Public Administration and Social Service Professions', 'Social Studies', 'Visual and Performing Arts', 'Health Professions and Related Programs', 'Business, Management, Marketing, and Related Support Services', 'History']
    },
    'Race/Ethnicity': {
        'IPEDS_VALUE_DESC': ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanics of any race', 'Native Hawaiian or Other Pacific Islander', 'Nonresident Alien', 'Race and Ethnicity unknown', 'Two or more races', 'White'],
        'names': ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanics of any race', 'Native Hawaiian or Other Pacific Islander', 'Nonresident Alien', 'Race and Ethnicity unknown', 'Two or more races', 'White']
    },
    'Gender': {
        'GENDER': ['M', 'F'],
        'names': ['Male', 'Female']
    }
};

var yearBySemesterObject = {
    2012.5: new Semester(2012.5, "Fall 2012"),
    2013: new Semester(2013, "Spring 2013"),
    2013.5: new Semester(2013.5, "Fall 2013"),
    2014: new Semester(2014, "Spring 2014"),
    2014.5: new Semester(2014.5, "Fall 2014"),
    2015: new Semester(2015, "Spring 2015"),
    2015.5: new Semester(2015.5, "Fall 2015"),
    2016: new Semester(2016, "Spring 2016"),
    2016.5: new Semester(2016.5, "Fall 2016"),
    2017: new Semester(2017, "Spring 2017"),
    2017.5: new Semester(2017.5, "Fall 2017"),
    2018: new Semester(2018, "Spring 2018"),
    2018.5: new Semester(2018.5, "Fall 2018"),
    2019: new Semester(2019, "Spring 2019"),
    2019.5: new Semester(2019.5, "Fall 2019"),
    2020: new Semester(2020, "Spring 2020"),
    2020.5: new Semester(2020.5, "Fall 2020"),
    2021: new Semester(2021, "Spring 2021"),
    2021.5: new Semester(2021.5, "Fall 2021"),
    2022: new Semester(2022, "Spring 2022"),
    2022.5: new Semester(2022.5, "Fall 2022"),
    2023: new Semester(2023, "Spring 2023"),
    2023.5: new Semester(2023.5, "Fall 2023")
};

var yearBySemesterObjectForDegree = { // .0 = JAN, .25 = MAY, .5 = AUG, .75 = DEC
    2011.5: new Semester(2011.5, "Aug 2011"),
    2011.75: new Semester(2011.75, "Dec 2011"),
    2012.5: new Semester(2012.5, "Aug 2012"),
    2012.25: new Semester(2012.25, "May 2012"),
    2012.75: new Semester(2012.75, "Dec 2012"),
    2012: new Semester(2012, "Jan 2012"),
    2013.75: new Semester(2013.75, "Dec 2013"),
    2013.5: new Semester(2013.5, "Aug 2013"),
    2013.25: new Semester(2013.25, "May 2013"),
    2013: new Semester(2013, "Jan 2013"),
    2014.75: new Semester(2014.75, "Dec 2014"),
    2014.5: new Semester(2014.5, "Aug 2014"),
    2014.25: new Semester(2014.25, "May 2014"),
    2014: new Semester(2014, "Jan 2014"),
    2015.75: new Semester(2015.75, "Dec 2015"),
    2015.5: new Semester(2015.5, "Aug 2015"),
    2015.25: new Semester(2015.25, "May 2015"),
    2015: new Semester(2015, "Jan 2015"),
    2016.75: new Semester(2016.75, "Dec 2016"),
    2016.5: new Semester(2016.5, "Aug 2016"),
    2016.25: new Semester(2016.25, "May 2016"),
    2016: new Semester(2016, "Jan 2016"),
    2017.25: new Semester(2017.25, "May 2017"),
    2017: new Semester(2017, "Jan 2017"),
    2017.5: new Semester(2017.5, "Aug 2017"),
    2017.75: new Semester(2017.75, "Dec 2017"),
    2018: new Semester(2018, "Jan 2018"),
    2018.25: new Semester(2018.25, "May 2018"),
    2018.5: new Semester(2018.5, "Aug 2018"),
    2018.75: new Semester(2018.75, "Dec 2018")
}

var yearBySemesterObjectForFinancial = {
    2017: new Semester(2017, "2017")
}

// OTHER
var NEW_FRESHMAN_CODE_ARR = ['F', 'I', 'S', 'H', 'Y']
var NEW_UNDERGRADUATE_CODE_ARR = ['T', 'R', 'X']
var NEW_GRADUATE_CODE_ARR = ['G', 'R', 'P', 'Z']

// ************************************************************************
//    SLIDERS
// ************************************************************************

// Global variables for selected year range
var yearRangeEnrollment = [2012.5, 2018.5]; // .5 = Fall, 0 = Spring
var yearRangeAdmissions = [2015, 2018]; // .5 = Fall, 0 = Spring
var yearRangeDegree = [2011.5, 2017.25]; // .0 = JAN, .25 = MAY, .5 = AUG, .75 = DEC

// Global variables for selected year range (SLIDER)
var d = new Date();
var currentYear = d.getFullYear();
//var currentMonth = d.getMonth(); // MIGHT NEED LATER: 0=Jan, 6=Jul
var currentSemester = "Spring" // Fall or Spring
var yearRangeLiveEnrollment = [2019, currentYear] // .5 = Fall, 0 = Spring
var yearRangeLiveAdmissions = [2018.5, currentYear+4.5] // .5 = Fall, 0 = Spring
var yearRangeLiveDegree = [2017.5, 2018.75] // .0 = JAN, .25 = MAY, .5 = AUG, .75 = DEC