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