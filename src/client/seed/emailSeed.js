var seedInbox = [
  {
    from: 'mhallatt0@walmart.com',
    to: 'cziem0@surveymonkey.com',
    subject: 'Office Assistant IV',
    body:
      'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
    date: '3/31/2017',
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
  },
  {
    from: 'nmulbery1@seattletimes.com',
    to: 'idimont1@usa.gov',
    subject: 'Technical Writer',
    body:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    date: '11/17/2016',
    isReaded: false,
    avatar:
      'https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1',
    tag: 'Teal',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/dddddd/000000',
        name: 'sodales_scelerisque_mauris.jpeg',
      },
    ],
  },
  {
    from: 'manuel@seattletimes.com',
    to: 'idimont1@usa.gov',
    subject: 'Technical Writer',
    body:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    date: '11/17/2016',
    isReaded: false,
    avatar:
      'https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1',
    tag: 'Teal',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/dddddd/000000',
        name: 'sodales_scelerisque_mauris.jpeg',
      },
    ],
  },
];

var seedSpam = [
  {
    from: 'mhallatt0@spammers.com',
    to: 'cziem0@surveymonkey.com',
    subject: 'Office Assistant IV',
    body:
      'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
    date: '3/31/2017',
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
  },
  {
    from: 'nmulbery1@spammers.com',
    to: 'idimont1@usa.gov',
    subject: 'Technical Writer',
    body:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    date: '11/17/2016',
    isReaded: false,
    avatar:
      'https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1',
    tag: 'Teal',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/dddddd/000000',
        name: 'sodales_scelerisque_mauris.jpeg',
      },
    ],
  },
  {
    from: 'manuel@spammers.com',
    to: 'idimont1@usa.gov',
    subject: 'Technical Writer',
    body:
      'sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    date: '11/17/2016',
    isReaded: false,
    avatar:
      'https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1',
    tag: 'Teal',
    attachements: [
      {
        file:
          'http://dummyimage.com/250x250.jpg/dddddd/000000',
        name: 'sodales_scelerisque_mauris.jpeg',
      },
    ],
  },
];

var seedEmails = {
  inbox: seedInbox,
  spam: seedSpam,
  deleted: [],
  filtered: [],
};

export default seedEmails;