import { gql } from 'apollo-boost';

// const getUserQuery = gql`
//     {
//         user {
//             id
//             email
//             password
//         }
//     }
//   `

 // ------------------------ MUTATIONS --------------------------------


// 
const login = gql`
    mutation($data: LoginInput!) {
        login(data: $data){
            access_token
        }
    }`
  
// const login = gql`
//      mutation($email: String!, $password: String!) {
//          login (email: $email, password: $password){
//              email
//              password
//          }
//      }
//    `

//$name, $password are query variables from SignUp Component
  const createNewUser = gql`
    mutation($email: String!, $password: String!) {
        createNewUser (name: "", email: $email, password: $password, usertype_id: 1){
            email
            password
            usertype_id
        }
    }
  `

//   $name, $password are query variables from Reset Password
  const resetPassword = gql`
    mutation($email: String!, $newPassword: String!) {
        resetPassword (email: $email, password: $newPassword) {
            id
            email
        }
    }
  
  `

  export { login, createNewUser, resetPassword,  };