
 export const ContactShema ={
 name:{
  type: 'string',
    required: true
 },
 phone:{
  type: 'string',
    required: true
 },
 email:{
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