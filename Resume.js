let myResume={
    "basics": {
      "name": "THIRUMARAN M",
      "email": "maranletters@gmail.com",
      "phone": 9003898189,
      "degree": "MCA",
      "location": {
        "address": "Thuraipakkam",
        "postalCode": 600097,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "None",
          "github":"https://github.com/Thirumaran-M"
        }
      ]
    },
    "work": [
      {
        "company": "Newgen Knowledge Works",
        "position": "Perl Developer",
        "startDate": "2017",
        "endDate": "till",
        "summary": "Handing HTML Conversions",
      },
    ],
    "education": [
      {
        "institution": "SAASC",
        "department": "B.Sc.",
        "studyType": "fulltime",
        "batch start year": 2007,
        "batch end year": 2010,
      }
    ],
    "skills": [
      {
        "name": "Perl, HTML, CSS, XML",
        "level": "Intermediate",
        "project": [
          "Word to XML and HTML Conversion"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil, English",
      }
    ],
    "interests": [
      {
        "name": "Playing Chess",
      }
    ]
  }
//  console.log(myResume);

/*  Object.keys(myResume).forEach((ele) => {
    console.log(`${ele}`);
  });
*/
//For the given JSON iterate over all for loops (for, for in, for of, for Each)

function AllObjectsFE(Resume){
  Object.keys(Resume).forEach((ele) => {
    if(typeof Resume[ele] === 'object' && Resume[ele] !== null){
        AllObjectsFE(Resume[ele]);
    }else{
        console.log(`ForEach Key: ${ele} => ${Resume[ele]}`);
    }
  });
}
AllObjectsFE(myResume);

function AllObjectsFI(Resume){
    for(var ele in Resume){
      if(typeof Resume[ele] === 'object' && Resume[ele] !== null){
          AllObjectsFI(Resume[ele]);
      }else{
          console.log(`ForIn Key: ${ele} => ${Resume[ele]}`);
      }
    };
  }
  AllObjectsFI(myResume);

  function AllObjectsFO(Resume){
    for(var key of Object.keys(Resume)){
      if(typeof Resume[key] === 'object' && Resume[key] !== null){
          AllObjectsFO(Resume[key]);
      }else{
          console.log(`ForOf Key: ${key} => ${Resume[key]}`);
      }
    };
  }
  AllObjectsFO(myResume);
