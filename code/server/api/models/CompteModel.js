
const mongoose = require('mongoose')

const compteSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Client',  
        },
        rib: {
            type: String,
            required: [true, 'Please enter your rib'],
        },
        solde: {
            type: Number,
            required: [true, 'Please enter your solde'],
        },
        type: {
            type: String,
            required: [true, 'Please enter your type'],
        },
        
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Compte', compteSchema)
