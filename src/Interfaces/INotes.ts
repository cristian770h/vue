export interface Notes{
  id:string
  title:string
  description:string
  tag: 'trabajo'| 'personal' | 'urgente'
  createdAt:Date
  dateStart: Date
  dateEnd:Date
}
