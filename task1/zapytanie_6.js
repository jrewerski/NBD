db.people.insert({
  sex: 'Male',
  first_name: 'Jan',
  last_name: 'Rewerski',
  job: 'Student',
  email: 'jrew@gmail.com',
  location: {
    city: 'Warsaw',
    address: { streetname: 'Marszalkowska', streetnumber: '42' }
  },
  description: "I like trains",
  height: 190,
  weight: 70,
  birth_date: '1998-09-30T07:44:17Z',
  nationality: 'Poland',
  credit: [
    {
      type: 'visa',
      number: '543643453',
      currency: 'PLN',
      balance: '666'
    }
  ]
});
