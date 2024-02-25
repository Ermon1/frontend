import Single from "../../components/single/Single"
import Profile from "../Profile"
import "./user.scss"

const User = () => {
const user = [
  {
    id: 1,
    firstName: "Ermias",
    lastName: "Brhane",
    email: "user1@gmail.com",
    password: "$2a$10$JryR3iJvQ40kG6Irf0h.keR.oL3R23PSc2e4yjFDuP19..AfONVcG",
    phoneNumber: "09874648490",
    role: "USER",
    exams: [],
    examResults: [],
    enabled: true,
    accountNonLocked: true,
    username: "user1@gmail.com",
    authorities: [
      {
        authority: "ROLE_USER",
      },
    ],
    credentialsNonExpired: true,
    accountNonExpired: true,
  },
  {
    id: 2,
    firstName: "Admin 1",
    lastName: "User",
    email: "admin1@gmail.com",
    password: "1234",
    phoneNumber: "09804648490",
    role: "ADMIN",
    exams: [],
    examResults: [],
    enabled: true,
    accountNonLocked: true,
    username: "admin1@gmail.com",
    authorities: [
      {
        authority: "admin:create",
      },
      {
        authority: "management:update",
      },
      {
        authority: "admin:read",
      },
      {
        authority: "management:read",
      },
      {
        authority: "admin:delete",
      },
      {
        authority: "management:delete",
      },
      {
        authority: "management:create",
      },
      {
        authority: "admin:update",
      },
      {
        authority: "ROLE_ADMIN",
      },
    ],
    credentialsNonExpired: true,
    accountNonExpired: true,
  },
  {
    id: 53,
    firstName: "Muse",
    lastName: "Semu",
    email: "muse@gmail.com",
    password: "$2a$10$7oUzxP9lAOsffwiCMiIkteE6zq7nlPICjbzwW/AIzLXZ3S3.5qzYi",
    phoneNumber: null,
    role: "ADMIN",
    exams: [],
    examResults: [],
    enabled: true,
    accountNonLocked: true,
    username: "muse@gmail.com",
    authorities: [
      {
        authority: "admin:create",
      },
      {
        authority: "management:update",
      },
      {
        authority: "admin:read",
      },
      {
        authority: "management:read",
      },
      {
        authority: "admin:delete",
      },
      {
        authority: "management:delete",
      },
      {
        authority: "management:create",
      },
      {
        authority: "admin:update",
      },
      {
        authority: "ROLE_ADMIN",
      },
    ],
    credentialsNonExpired: true,
    accountNonExpired: true,
  },
];
  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Profile user={user[0]} />
    </div>
  )
}

export default User