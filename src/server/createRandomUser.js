function createRandomUser() {
  var namesPool = [
    'Juan',
    'Raul',
    'Sandra',
    'Ruben',
    'Angélica',
    'Raquel',
    'Juana',
    'Alejandro',
    'Ramón',
    'Miguel',
    'Beatriz',
    'Nicolas',
    'Pancho',
    'Joel',
    'Sofia',
    'Aranza',
    'Edgar',
    'Andrea',
    'Susie',
    'Emmanuel',
  ];
  var emailsPool = [
    'gmail',
    'yahoo',
    'outlook',
    'oracle',
    'ibm',
    'microsoft',
    'apple',
    'ford',
    'applebees',
    'adidas',
    'amazon',
    'mercadolibre',
    'rappi',
    'ubber',
  ];

  function getRandomInt(max) {
    return Math.floor(
      Math.random() * Math.floor(max)
    );
  }

  var today = new Date();

  var newMail = {
    from: `${
      namesPool[getRandomInt(namesPool.length)]
    }@${
      emailsPool[getRandomInt(emailsPool.length)]
    }.com`,
    field: 'inbox',
    inFilter: false,
    to: 'cziem0@surveymonkey.com',
    subject:
      'Quam nulla porttitor massa id neque aliquam vestibulum.',
    body: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
    isReaded: false,
    avatar:
      'https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1',
    tag: 'Indigo',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
        name: 'ut_nulla_sed.jpeg',
      },
    ],
  };

  return newMail;
}

/*============================================================================*/

export default createRandomUser;
