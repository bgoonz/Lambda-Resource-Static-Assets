console.log('Assignment-2: Object Exercise');

var me = {
  name: 'Prashant Acharya',
  address: 'Kalanki, Kathmandu',
  emails: ['prashant.acharya@sagramatha.edu.np', 'dev.prashaant@gmail.com'],
  interests: ['Videography', 'Blogging', 'Speaking'],
  education: [
    {
      name: 'Sagarmatha College of Science and Technology',
      enrolledDate: 'October, 2018',
    },
    {
      name: 'Everest H.S.S',
      enrolledDate: 'October, 2015',
    },
  ],
};

console.log(me);

me.education.forEach(function (institution) {
  console.log(
    'Name: ',
    institution.name,
    ', Enrolled Date: ',
    institution.enrolledDate
  );
});
