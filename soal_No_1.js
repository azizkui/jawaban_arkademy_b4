function biodata(name, age) {
    var biodata = {
      name:name,
      age:age,
      address: "Malang",
      hobbies: ["reading", "listening podcast"],
      is_married: false,
      list_school: [
        { name: "TK Aisyiyah Bustanul Atfhal 12 MALANG", year_in: 2003, year_out: 2004, major: "null" },
        { name: "SD NEGERI Blimbing V MALANG", year_in: 2004, year_out: 2010, major: "null" },
        { name: "SMP NEGERI 24 MALANG", year_in: 2010, year_out: 2013, major: "null" },
        { name: "SMKN 5 Malang", year_in: 2013, year_out: 2016, major: "Rekayasa Perangkat Lunak" }
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
  
