var initialXlatTables = {
	'en': {
		'DUTCH': 'Dutch (Nederlands)',
		'ENGLISH': 'English (Engels)',
		'HEADER': 'Please enter your information:',
		'FIRST_NAME': 'First name:',
		'AGE': 'Age:',
		'FAV_COLOR': 'Favorite color:',
		'COLOR_RED': 'Red',
		'COLOR_GREEN': 'Green',
		'COLOR_BLUE': 'Blue',
		'SUBMIT': 'Submit the form',
		'FIRST_NAME_REQUIRED': 'First name is required.',
		'FIRST_NAME_MINLENGTH': 'First name must have at least {{len}} characters.',
		'FIRST_NAME_MAXLENGTH': 'First name must have at most {{len}} characters.',
		'AGE_REQUIRED': 'Age is required.',
		'AGE_NEGATIVE': 'Age cannot be negative.',
		'AGE_MAX': 'Age cannot be higher than {{years}}.',
		'AGE_INTEGER': 'Age must be an integer number.',
		'INCORRECT_FIELDS': function(parameters) {
			if(parameters.n == 1) return 'INCORRECT_FIELDS_SINGULAR';
			else return 'INCORRECT_FIELDS_PLURAL';
		},
		'INCORRECT_FIELDS_SINGULAR': '1 input field was incorrect.',
		'INCORRECT_FIELDS_PLURAL': '{{n}} input fields were incorrect.'
	},
	'nl': {
		'DUTCH': 'Nederlands (Dutch)',
		'ENGLISH': 'Engels (English)',
		'HEADER': 'Voer a.u.b. uw gegevens in:',
		'FIRST_NAME': 'Voornaam:',
		'AGE': 'Leeftijd:',
		'FAV_COLOR': 'Lievelingskleur:',
		'COLOR_RED': 'Rood',
		'COLOR_GREEN': 'Groen',
		'COLOR_BLUE': 'Blauw',
		'SUBMIT': 'Verzenden',
		'FIRST_NAME_REQUIRED': 'Voornaam is verplicht.',
		'FIRST_NAME_MINLENGTH': 'Voornaam moet uit minimaal {{len}} karakters bestaan.',
		'FIRST_NAME_MAXLENGTH': 'Voornaam mag niet uit meer dan {{len}} karakters bestaan.',
		'AGE_REQUIRED': 'Leeftijd is verplicht.',
		'AGE_NEGATIVE': 'Leeftijd kan niet negatief zijn.',
		'AGE_MAX': 'Leeftijd kan niet hoger zin dan {{years}}.',
		'AGE_INTEGER': 'Leeftijd moet een geheel getal zijn.',
		'INCORRECT_FIELDS': function(parameters) {
			if(parameters.n == 1) return 'INCORRECT_FIELDS_SINGULAR';
			else return 'INCORRECT_FIELDS_PLURAL';
		},
		'INCORRECT_FIELDS_SINGULAR': '1 invoerveld was incorrect.',
		'INCORRECT_FIELDS_PLURAL': '{{n}} invoervelden waren incorrect.'
	}
};
