
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex("users_appointments").insert([
        {
          user_id: 20,
          appointment_id: 34,
          accepted: true
        },
        {
          user_id: 14,
          appointment_id: 22,
          accepted: false
        },
        {
          user_id: 12,
          appointment_id: 85,
          accepted: true
        },
        {
          user_id: 15,
          appointment_id: 16,
          accepted: true
        },
        {
          user_id: 11,
          appointment_id: 28,
          accepted: true
        },
        {
          user_id: 18,
          appointment_id: 77,
          accepted: true
        },
        {
          user_id: 2,
          appointment_id: 1,
          accepted: true
        },
        {
          user_id: 7,
          appointment_id: 5,
          accepted: false
        },
        {
          user_id: 6,
          appointment_id: 8,
          accepted: true
        },
        {
          user_id: 20,
          appointment_id: 12,
          accepted: true
        },
        {
          user_id: 14,
          appointment_id: 17,
          accepted: false
        },
        {
          user_id: 20,
          appointment_id: 75,
          accepted: false
        },
        {
          user_id: 9,
          appointment_id: 97,
          accepted: false
        },
        {
          user_id: 17,
          appointment_id: 62,
          accepted: false
        },
        {
          user_id: 17,
          appointment_id: 4,
          accepted: false
        },
        {
          user_id: 6,
          appointment_id: 61,
          accepted: true
        },
        {
          user_id: 11,
          appointment_id: 78,
          accepted: false
        },
        {
          user_id: 1,
          appointment_id: 97,
          accepted: false
        },
        {
          user_id: 5,
          appointment_id: 31,
          accepted: true
        },
        {
          user_id: 10,
          appointment_id: 53,
          accepted: false
        },
        {
          user_id: 20,
          appointment_id: 30,
          accepted: false
        },
        {
          user_id: 17,
          appointment_id: 9,
          accepted: true
        },
        {
          user_id: 2,
          appointment_id: 42,
          accepted: false
        },
        {
          user_id: 7,
          appointment_id: 48,
          accepted: true
        },
        {
          user_id: 16,
          appointment_id: 23,
          accepted: true
        },
        {
          user_id: 5,
          appointment_id: 18,
          accepted: true
        },
        {
          user_id: 1,
          appointment_id: 67,
          accepted: true
        },
        {
          user_id: 15,
          appointment_id: 85,
          accepted: true
        },
        {
          user_id: 12,
          appointment_id: 51,
          accepted: false
        },
        {
          user_id: 2,
          appointment_id: 6,
          accepted: true
        },
        {
          user_id: 10,
          appointment_id: 50,
          accepted: true
        },
        {
          user_id: 6,
          appointment_id: 2,
          accepted: false
        },
        {
          user_id: 12,
          appointment_id: 35,
          accepted: true
        },
        {
          user_id: 1,
          appointment_id: 92,
          accepted: true
        },
        {
          user_id: 1,
          appointment_id: 89,
          accepted: false
        },
        {
          user_id: 3,
          appointment_id: 91,
          accepted: false
        },
        {
          user_id: 17,
          appointment_id: 95,
          accepted: false
        },
        {
          user_id: 10,
          appointment_id: 92,
          accepted: true
        },
        {
          user_id: 8,
          appointment_id: 19,
          accepted: false
        },
        {
          user_id: 17,
          appointment_id: 13,
          accepted: false
        },
        {
          user_id: 6,
          appointment_id: 63,
          accepted: true
        },
        {
          user_id: 5,
          appointment_id: 50,
          accepted: false
        },
        {
          user_id: 19,
          appointment_id: 38,
          accepted: true
        },
        {
          user_id: 4,
          appointment_id: 10,
          accepted: true
        },
        {
          user_id: 10,
          appointment_id: 83,
          accepted: false
        },
        {
          user_id: 6,
          appointment_id: 45,
          accepted: false
        },
        {
          user_id: 10,
          appointment_id: 99,
          accepted: true
        },
        {
          user_id: 18,
          appointment_id: 4,
          accepted: true
        },
        {
          user_id: 17,
          appointment_id: 74,
          accepted: false
        },
        {
          user_id: 11,
          appointment_id: 43,
          accepted: false
        },
        {
          user_id: 7,
          appointment_id: 25,
          accepted: true
        },
        {
          user_id: 6,
          appointment_id: 49,
          accepted: false
        },
        {
          user_id: 7,
          appointment_id: 95,
          accepted: true
        },
        {
          user_id: 4,
          appointment_id: 44,
          accepted: false
        },
        {
          user_id: 16,
          appointment_id: 14,
          accepted: true
        },
        {
          user_id: 17,
          appointment_id: 68,
          accepted: false
        },
        {
          user_id: 18,
          appointment_id: 91,
          accepted: false
        },
        {
          user_id: 16,
          appointment_id: 10,
          accepted: false
        },
        {
          user_id: 11,
          appointment_id: 97,
          accepted: false
        },
        {
          user_id: 15,
          appointment_id: 78,
          accepted: true
        },
        {
          user_id: 17,
          appointment_id: 93,
          accepted: false
        },
        {
          user_id: 5,
          appointment_id: 18,
          accepted: false
        },
        {
          user_id: 16,
          appointment_id: 82,
          accepted: true
        },
        {
          user_id: 20,
          appointment_id: 13,
          accepted: false
        },
        {
          user_id: 5,
          appointment_id: 44,
          accepted: false
        },
        {
          user_id: 7,
          appointment_id: 44,
          accepted: true
        },
        {
          user_id: 6,
          appointment_id: 40,
          accepted: false
        },
        {
          user_id: 14,
          appointment_id: 9,
          accepted: false
        },
        {
          user_id: 2,
          appointment_id: 50,
          accepted: true
        },
        {
          user_id: 16,
          appointment_id: 92,
          accepted: true
        },
        {
          user_id: 5,
          appointment_id: 42,
          accepted: true
        },
        {
          user_id: 9,
          appointment_id: 20,
          accepted: true
        },
        {
          user_id: 14,
          appointment_id: 30,
          accepted: true
        },
        {
          user_id: 10,
          appointment_id: 96,
          accepted: false
        },
        {
          user_id: 4,
          appointment_id: 86,
          accepted: false
        },
        {
          user_id: 2,
          appointment_id: 91,
          accepted: false
        },
        {
          user_id: 1,
          appointment_id: 85,
          accepted: true
        },
        {
          user_id: 1,
          appointment_id: 49,
          accepted: true
        },
        {
          user_id: 19,
          appointment_id: 81,
          accepted: false
        },
        {
          user_id: 19,
          appointment_id: 94,
          accepted: false
        },
        {
          user_id: 11,
          appointment_id: 35,
          accepted: false
        },
        {
          user_id: 18,
          appointment_id: 31,
          accepted: false
        },
        {
          user_id: 19,
          appointment_id: 9,
          accepted: true
        },
        {
          user_id: 6,
          appointment_id: 46,
          accepted: true
        },
        {
          user_id: 13,
          appointment_id: 42,
          accepted: true
        },
        {
          user_id: 4,
          appointment_id: 52,
          accepted: false
        },
        {
          user_id: 18,
          appointment_id: 11,
          accepted: true
        },
        {
          user_id: 2,
          appointment_id: 59,
          accepted: true
        },
        {
          user_id: 10,
          appointment_id: 47,
          accepted: false
        },
        {
          user_id: 11,
          appointment_id: 3,
          accepted: true
        },
        {
          user_id: 19,
          appointment_id: 73,
          accepted: false
        },
        {
          user_id: 14,
          appointment_id: 78,
          accepted: true
        },
        {
          user_id: 1,
          appointment_id: 43,
          accepted: false
        },
        {
          user_id: 11,
          appointment_id: 72,
          accepted: false
        },
        {
          user_id: 3,
          appointment_id: 54,
          accepted: false
        },
        {
          user_id: 3,
          appointment_id: 20,
          accepted: true
        },
        {
          user_id: 9,
          appointment_id: 2,
          accepted: false
        },
        {
          user_id: 9,
          appointment_id: 92,
          accepted: false
        },
        {
          user_id: 16,
          appointment_id: 53,
          accepted: false
        },
        {
          user_id: 2,
          appointment_id: 89,
          accepted: true
        }
      ]);
    });
};
