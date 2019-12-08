class Request {
	constructor() {
		this.user = {
			id: 1,
			username: 'admin',
			password: '',
			email: '',
			is_superuser: true
		};
		this.recordings = [{
			date_recorded: this.unixTs(),
			text: 'Something that I said.',
			name: 'Seomthing I/You',
			audioSrc: '',
			interpretation: 'Something that you said.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'Something that he said.',
			name: 'Something He/She',
			audioSrc: '',
			interpretation: 'Something that she said.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'Something that we said.',
			name: ' Something We/They',
			audioSrc: '',
			interpretation: 'Something that they said.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'This is demo text.',
			name: 'Demo',
			audioSrc: '',
			interpretation: 'That is demo text.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'What isn\t demo text?',
			name: 'All Encompassing Demo',
			audioSrc: '',
			interpretation: 'Everything is demo text.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'How many demo recordings are there?',
			name: 'Demo Count',
			audioSrc: '',
			interpretation: 'There are fifteen demo texts.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60),
			text: 'Are we there yet?',
			name: 'When',
			audioSrc: '',
			interpretation: 'No.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60 * 24 * 10 * -1),
			text: 'How about now?',
			name: 'Now?',
			audioSrc: '',
			interpretation: 'We get there when we get there!',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(60 * 1000 * 60 * 60 * 24 * 2),
			text: '',
			name: 'Empty',
			audioSrc: '',
			interpretation: '',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'You might be wondering how I came up with all these phrases.',
			name: 'Genius',
			audioSrc: '',
			interpretation: 'Easy. I\'m a genius!',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'What?',
			name: 'Disagree',
			audioSrc: '',
			interpretation: 'You weren\'t wondering how I came up with all these phrases?',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'And you don\'t think I\'m a genius?',
			name: 'Pride',
			audioSrc: '',
			interpretation: 'Well, let\'s see you try coming up with some phrases!',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'Hello. My name is Inigo Montoya.',
			name: 'Inigo Montoya',
			audioSrc: '',
			interpretation: 'You killed my father. Prepare to die.',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'Fezzik, are there rocks ahead?',
			name: 'Fezzik\'s Rocks',
			audioSrc: '',
			interpretation: 'If there are, we all be dead!',
			score: this.randomScore()
		}, {
			date_recorded: this.unixTs(),
			text: 'No more rhymes now, I mean it!',
			name: 'Rhymes',
			audioSrc: '',
			interpretation: 'Anybody want a peanut?',
			score: this.randomScore()
		}];
		this.textSamples = [{
			id: 1,
			name: 'Oakies',
			text: 'Oak is strong and also gives shade.'
		}, {
			id: 2,
			name: 'Pets',
			text: 'Cats and dogs each hate the other.'
		}, {
			id: 3,
			name: 'Pipe',
			text: 'The pipe began to rust while new.'
		}, {
			id: 4,
			name: 'Crate',
			text: 'Open the crate but don\'t break the glass.'
		}, {
			id: 5,
			name: 'Sum',
			text: 'Add the sum to the product of these three.'
		}, {
			id: 6,
			name: 'Thieves',
			text: 'Thieves who rob friends deserve jail.'
		}, {
			id: 7,
			name: 'Cheese',
			text: 'The ripe taste of cheese improves with age.'
		}, {
			id: 8,
			name: 'Orders',
			text: 'Act on these orders with great speed.'
		}, {
			id: 9,
			name: 'Hog',
			text: 'The hog crawled under the high fence.'
		}, {
			id: 10,
			name: 'Vat',
			text: 'Move the vat over the hot fire.'
		}, {
			id: 11,
			name: 'Birch',
			text: 'The birch canoe slid on the smooth planks.'
		}, {
			id: 12,
			name: 'Glue',
			text: 'Glue the sheet to the dark blue background.'
		}, {
			id: 13,
			name: 'Wells',
			text: 'It\'s easy to tell the depth of a well.'
		}, {
			id: 14,
			name: 'Chicken',
			text: 'These days a chicken leg is a rare dish.'
		}, {
			id: 15,
			name: 'Rice',
			text: 'Rice is often served in round bowls'
		}];
		this.data = {};
		this.method = '';
		this.status = 200;
		this.readyState = 4;
		this.responseText = '';
		this.requestHeaders = {};
		this.withCredentials = false;
	}

	unixTs(offset) {
		return Math.floor((Date.now() + offset) / 1000);
	}

	setRequestHeader(key, value) {
		this.requestHeaders[key] = value;
	}

	open(method, action) {
		this.method = method;
		this.action = action;
	}

	send(data) {
		this.data = data;
		this[this.action]();
		this.responseText = JSON.stringify(this.responseText);
		this.onreadystatechange()
	}

	onreadystatechange() {}

	signUp() {
		this.responseText = {
			user: Object.assign({}, this.user),
			recordings: this.getRecordingsData(1, 10),
			recordingCount: this.recordings.length,
			textSamples: this.getTextSamplesData(0, 10)
		};
	}
	
	signOut() {
		this.responseText = {
			user: {
				id: 0,
				username: '',
				password: '',
				email: '',
				is_superuser: false
			}
		};
	}

	signIn() {
		this.responseText = {
			user: Object.assign({}, this.user),
			recordings: this.getRecordingsData(1, 10),
			recordingCount: this.recordings.length,
			textSamples: this.getTextSamplesData(0, 10)
		};
	}

	sendSignInHelpEmail() {
		this.responseText = {};
	}

	updateUser() {
		this.responseText = {
			csrfToken: ''
		};
	}

	newRecording() {
		this.responseText = {
			recording: {
				score: this.randomScore()
			},
			recordingCount: this.recordings.length,
			recordings: this.getRecordingsData(1, this.data.get('recordingsPerPage')),
			newRecordingResultsIndex: this.data.get('newRecordingResultsIndex')
		};
	}

	getTextSamples() {
		this.responseText = {
			textSamples: this.getTextSamplesData(this.data.get('id'), 10),
			ts: this.data.get('ts')
		};
	}

	getRecordings() {
		this.responseText = {
			recordings: this.getRecordingsData(this.data.get('page'), this.data.get('recordingsPerPage')),
			pageNumberAfterGetRecordings: this.data.get('pageNumberAfterGetRecordings'),
			ts: this.data.get('ts')
		};
	}

	importTextSamples() {
		this.responseText = {
			textSamples: this.getTextSamplesData(0, 10),
			ts: this.data.get('ts')
		};
	}

	demoSpeechAnalyzer() {
		this.responseText = this.textSamples[Math.floor(Math.random() * this.textSamples.length)].text;
	}

	getRecordingsData(page, recordingsPerPage) {
		let start = (page - 1) * recordingsPerPage;
		let end = page * recordingsPerPage;

		return this.recordings.sort((a, b) => b.date_recorded - a.date_recorded).slice(start, end);
	}

	getTextSamplesData(id, limit) {
		let textSamples = this.textSamples.filter(textSample => id < textSample.id);
		let underflow = limit - textSamples.length;

		if (underflow > 0) textSamples = textSamples.concat(this.textSamples.filter(textSample => id > textSample.id));

		return textSamples.slice(0, limit);
	}

	randomScore() {
		return Math.floor(Math.random() * 101);
	}
}
