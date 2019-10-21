const { Model } = require('objection')

class Appointment extends Model {
  static get tableName() {
    return 'appointments'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "appointments.id",
          through: {
            from: "users_appointments.appointment_id",
            to: "user_appointments.user_id"
          },
          to: "users.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "date", "time", "creator_id"],

      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        details: { type: "string" },
        location: { type: "string" },
        date: { type: "string" },
        time: { type: "string" },
        completed: { type: "boolean" },
        creator_id: { type: "integer" }
      }
    }
  }

}

module.exports = Appointment

