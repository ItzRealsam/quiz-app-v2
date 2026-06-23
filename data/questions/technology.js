export const technologyQuestions = [

  {
    id: 'html-basics',
    category: 'technology',
    difficulty: 'easy',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Tool Multi Language'
    ],
    answer: 0,
    explanation: 'HTML stands for Hyper Text Markup Language.',
    tags: ['html', 'web'],
    points: 200
  },

  {
    id: 'css-font-size',
    category: 'technology',
    difficulty: 'easy',
    question: 'Which CSS property controls text size?',
    options: [
      'font-style',
      'text-size',
      'font-size',
      'text-style'
    ],
    answer: 2,
    explanation: 'The font-size property controls the size of text in CSS.',
    tags: ['css', 'web'],
    points: 200
  },

  {
    id: 'js-array-method-push',
    category: 'technology',
    difficulty: 'easy',
    question: 'Which JavaScript array method adds an item to the end of an array?',
    options: [
      'shift()',
      'push()',
      'pop()',
      'unshift()'
    ],
    answer: 1,
    explanation: 'push() adds one or more elements to the end of an array.',
    tags: ['javascript', 'arrays'],
    points: 200
  },

  {
    id: 'cpu-meaning',
    category: 'technology',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Power Unit',
      'Central Program Utility',
      'Control Processing User'
    ],
    answer: 0,
    explanation: 'CPU stands for Central Processing Unit.',
    tags: ['hardware', 'computer-basics'],
    points: 200
  },

  {
    id: 'url-meaning',
    category: 'technology',
    difficulty: 'easy',
    question: 'What does URL stand for?',
    options: [
      'Universal Resource Locator',
      'Uniform Resource Locator',
      'Unified Reference Link',
      'Uniform Retrieval Link'
    ],
    answer: 1,
    explanation: 'URL stands for Uniform Resource Locator.',
    tags: ['internet', 'web'],
    points: 200
  },

  {
    id: 'binary-base',
    category: 'technology',
    difficulty: 'easy',
    question: 'Binary numbers use which two digits?',
    options: [
      '0 and 1',
      '1 and 2',
      '0 and 9',
      '2 and 3'
    ],
    answer: 0,
    explanation: 'Binary is base-2 and uses only 0 and 1.',
    tags: ['computing', 'binary'],
    points: 200
  },

  {
    id: 'http-purpose',
    category: 'technology',
    difficulty: 'easy',
    question: 'HTTP is mainly used for what?',
    options: [
      'Sending emails',
      'Transferring web pages over the internet',
      'Designing graphics',
      'Creating spreadsheets'
    ],
    answer: 1,
    explanation: 'HTTP is the protocol used to transfer web content between browsers and servers.',
    tags: ['web', 'internet'],
    points: 200
  },

  {
    id: 'input-device-example',
    category: 'technology',
    difficulty: 'easy',
    question: 'Which of the following is an input device?',
    options: [
      'Monitor',
      'Printer',
      'Keyboard',
      'Speaker'
    ],
    answer: 2,
    explanation: 'A keyboard is an input device because it sends data to the computer.',
    tags: ['hardware', 'computer-basics'],
    points: 200
  },

  {
    id: 'operating-system-example',
    category: 'technology',
    difficulty: 'easy',
    question: 'Which of these is an operating system?',
    options: [
      'Google Chrome',
      'Microsoft Word',
      'Windows 11',
      'Adobe Photoshop'
    ],
    answer: 2,
    explanation: 'Windows 11 is an operating system.',
    tags: ['software', 'os'],
    points: 200
  },

  {
    id: 'html-link-tag',
    category: 'technology',
    difficulty: 'easy',
    question: 'Which HTML tag is used to create a hyperlink?',
    options: [
      '<img>',
      '<a>',
      '<p>',
      '<linker>'
    ],
    answer: 1,
    explanation: 'The <a> tag is used to create hyperlinks in HTML.',
    tags: ['html', 'web'],
    points: 200
  },

  {
    id: 'css-box-model-margin',
    category: 'technology',
    difficulty: 'medium',
    question: 'In the CSS box model, which property creates space outside an element’s border?',
    options: [
      'padding',
      'border',
      'margin',
      'outline'
    ],
    answer: 2,
    explanation: 'Margin creates space outside the border of an element.',
    tags: ['css', 'box-model'],
    points: 300
  },

  {
    id: 'js-const-rule',
    category: 'technology',
    difficulty: 'medium',
    question: 'What is true about a JavaScript variable declared with const?',
    options: [
      'It can never store objects',
      'It cannot be reassigned after declaration',
      'It is only available inside loops',
      'It must always store numbers'
    ],
    answer: 1,
    explanation: 'A const variable cannot be reassigned after declaration, though object contents may still be mutable.',
    tags: ['javascript', 'variables'],
    points: 300
  },

  {
    id: 'sql-purpose',
    category: 'technology',
    difficulty: 'medium',
    question: 'SQL is primarily used for what?',
    options: [
      'Styling websites',
      'Editing images',
      'Managing and querying databases',
      'Compressing files'
    ],
    answer: 2,
    explanation: 'SQL is used to store, retrieve, and manage data in relational databases.',
    tags: ['database', 'sql'],
    points: 300
  },

  {
    id: 'git-purpose',
    category: 'technology',
    difficulty: 'medium',
    question: 'What is Git mainly used for?',
    options: [
      'Graphic design',
      'Version control',
      'Video streaming',
      'Database hosting'
    ],
    answer: 1,
    explanation: 'Git is a version control system used to track code changes.',
    tags: ['git', 'development'],
    points: 300
  },

  {
    id: 'api-meaning',
    category: 'technology',
    difficulty: 'medium',
    question: 'What is the main purpose of an API?',
    options: [
      'To cool down computer hardware',
      'To allow different software systems communicate with each other',
      'To increase internet speed',
      'To replace a database'
    ],
    answer: 1,
    explanation: 'APIs define how software systems communicate and exchange data.',
    tags: ['api', 'software'],
    points: 300
  },

  {
    id: 'dns-role',
    category: 'technology',
    difficulty: 'medium',
    question: 'What does DNS do on the internet?',
    options: [
      'Encrypts your files',
      'Turns domain names into IP addresses',
      'Creates web page layouts',
      'Stores browser passwords'
    ],
    answer: 1,
    explanation: 'DNS translates human-readable domain names into IP addresses computers can use.',
    tags: ['internet', 'dns'],
    points: 300
  },

  {
    id: 'responsive-design-meaning',
    category: 'technology',
    difficulty: 'medium',
    question: 'What does responsive web design mean?',
    options: [
      'A site responds only to mouse clicks',
      'A site automatically adapts to different screen sizes',
      'A site loads only on desktop devices',
      'A site can only be edited live'
    ],
    answer: 1,
    explanation: 'Responsive design adapts layouts and content to different screen sizes and devices.',
    tags: ['web', 'css', 'responsive-design'],
    points: 300
  },

  {
    id: 'cloud-computing-meaning',
    category: 'technology',
    difficulty: 'medium',
    question: 'Cloud computing refers to what?',
    options: [
      'Saving files only on USB drives',
      'Using internet-hosted servers and services for storage or computing',
      'Programming only in the browser',
      'Making computer screens transparent'
    ],
    answer: 1,
    explanation: 'Cloud computing uses remote internet-hosted servers and services instead of relying only on a local machine.',
    tags: ['cloud', 'infrastructure'],
    points: 300
  },

  {
    id: 'two-factor-auth',
    category: 'technology',
    difficulty: 'medium',
    question: 'What is the main purpose of two-factor authentication (2FA)?',
    options: [
      'To reduce monitor brightness',
      'To improve security by requiring an extra verification step',
      'To speed up file downloads',
      'To create duplicate user accounts'
    ],
    answer: 1,
    explanation: '2FA improves account security by requiring a second verification method in addition to a password.',
    tags: ['security', 'authentication'],
    points: 300
  },

  {
    id: 'frontend-vs-backend',
    category: 'technology',
    difficulty: 'hard',
    question: 'Which statement best describes frontend development?',
    options: [
      'It focuses on server infrastructure only',
      'It focuses on the part of an application users interact with directly',
      'It only involves writing SQL queries',
      'It is the same as network administration'
    ],
    answer: 1,
    explanation: 'Frontend development focuses on the user-facing part of an application such as layout, interactions, and interface behavior.',
    tags: ['frontend', 'web'],
    points: 400
  }

];