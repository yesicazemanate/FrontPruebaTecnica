export const ContactShema ={
    email:{
     type: 'string',
       required: true
    },
    name:{
     type: 'string',
       required: true
    },
    password:{
        type: 'string',
          required: true
       },

    createdAt: {
     type: 'date',
     default: new Date()
   },
   updatedAt: {
     type: 'date',
     default: new Date()
   }
    }