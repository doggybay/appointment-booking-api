
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Karen",
          last_name: "Powers",
          email: "karenpowers@talendula.com",
          phone: "(844) 436-3356",
          password: "quis"
        },
        {
          first_name: "Kitty",
          last_name: "Shaw",
          email: "kittyshaw@talendula.com",
          phone: "(913) 432-3441",
          password: "fugiat"
        },
        {
          first_name: "Shawna",
          last_name: "Ratliff",
          email: "shawnaratliff@talendula.com",
          phone: "(819) 573-2355",
          password: "ipsum"
        },
        {
          first_name: "Case",
          last_name: "Ball",
          email: "caseball@talendula.com",
          phone: "(977) 515-2135",
          password: "deserunt"
        },
        {
          first_name: "Gabrielle",
          last_name: "Orr",
          email: "gabrielleorr@talendula.com",
          phone: "(870) 475-3730",
          password: "in"
        },
        {
          first_name: "Ortega",
          last_name: "Parker",
          email: "ortegaparker@talendula.com",
          phone: "(819) 419-3258",
          password: "esse"
        },
        {
          first_name: "Herminia",
          last_name: "Williams",
          email: "herminiawilliams@talendula.com",
          phone: "(872) 470-2505",
          password: "aliquip"
        },
        {
          first_name: "Emilia",
          last_name: "Lawrence",
          email: "emilialawrence@talendula.com",
          phone: "(861) 596-2433",
          password: "eu"
        },
        {
          first_name: "Lydia",
          last_name: "Kirkland",
          email: "lydiakirkland@talendula.com",
          phone: "(901) 478-3686",
          password: "dolore"
        },
        {
          first_name: "Cotton",
          last_name: "Mooney",
          email: "cottonmooney@talendula.com",
          phone: "(822) 531-2224",
          password: "nisi"
        },
        {
          first_name: "Barlow",
          last_name: "Lawson",
          email: "barlowlawson@talendula.com",
          phone: "(914) 567-3038",
          password: "commodo"
        },
        {
          first_name: "Anderson",
          last_name: "Roman",
          email: "andersonroman@talendula.com",
          phone: "(900) 465-2414",
          password: "sit"
        },
        {
          first_name: "Lee",
          last_name: "Peterson",
          email: "leepeterson@talendula.com",
          phone: "(824) 433-3531",
          password: "sit"
        },
        {
          first_name: "Chandra",
          last_name: "Lang",
          email: "chandralang@talendula.com",
          phone: "(863) 524-2212",
          password: "quis"
        },
        {
          first_name: "Lorraine",
          last_name: "Campbell",
          email: "lorrainecampbell@talendula.com",
          phone: "(849) 578-3333",
          password: "dolor"
        },
        {
          first_name: "Diana",
          last_name: "Hahn",
          email: "dianahahn@talendula.com",
          phone: "(974) 483-3041",
          password: "nostrud"
        },
        {
          first_name: "Best",
          last_name: "Sharpe",
          email: "bestsharpe@talendula.com",
          phone: "(913) 553-3659",
          password: "consectetur"
        },
        {
          first_name: "Cameron",
          last_name: "Reid",
          email: "cameronreid@talendula.com",
          phone: "(977) 520-2030",
          password: "officia"
        },
        {
          first_name: "Irma",
          last_name: "Hoffman",
          email: "irmahoffman@talendula.com",
          phone: "(816) 469-2056",
          password: "qui"
        },
        {
          first_name: "Molly",
          last_name: "Francis",
          email: "mollyfrancis@talendula.com",
          phone: "(875) 527-2248",
          password: "voluptate"
        }
      ]);
    });
};
