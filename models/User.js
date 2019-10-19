const { Model } = require('objection')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Appointment = require('./Appointment') 

    return {
      appointments: {
        relation: Model.ManyToManyRelation,
        modelClass: Appointment,
        join: {
          from: 'users.id',
          through: {
            from: 'users_appointments.user_id',
            to: 'users_appointments.appointment.id'
          },
          to: 'appointments.id'
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["first_name", "last_name", "email", "password", "phone"],

      properties: {
        id: { type: "integer" },
        first_name: { type: "string", minLength: 1, maxLength: 255 },
        last_name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string" },
        updated_at: { type: "string" }
      }
    };
  }

}

