import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('varchar')
  email: string

  @Column('varchar')
  password: string

  @Column('int')
  gender: number

  @Column('varchar')
  phone: string

  @Column({ type: 'varchar', length: 2 })
  country: string

  @Column({ type: 'varchar', length: 11 })
  cpf: string

  @Column({ type: 'boolean', default: true })
  newsletter: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User
