function biodata(name, age) {
    var biodata = {
      name:name,
      age:age,
      address: "Malang",
      hobbies: ["reading", "listening podcast"],
      is_married: false,
      list_school: [
        { name: "SMKN 5 Malang", year_in: 2016, year_out: 2018, major: "Rekayasa Perangkat Lunak" },
        { name: "SMKN 5 Malang", year_in: 2016, year_out: 2018, major: "Teknik Komputer Jaringan" }
      ],
      skill: [
        { name: "Programming", level: "Beginner" },
        { name: "Gaming", level: "Advanced" },
        { name: "Driving", level: "Advanced" },
      ],
      interest_in_coding: true
    };
    return JSON.stringify(biodata)
  }
  console.log(biodata("Muhammad Rizky Aziz Rundono",21));
  
