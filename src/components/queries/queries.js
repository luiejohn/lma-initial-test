import { gql } from 'apollo-boost';

const getUserQuery = gql`
    {
        user {
            id
            email
            password
        }
    }
  `

 // ------------------------ MUTATIONS --------------------------------


//$name, $password are query variables from SignUp Component
  const createNewUser = gql`
    mutation($email: String!, $password: String!) {
        createNewUser (email: $email, password: $password){
            id
            email
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

  export { getUserQuery, createNewUser, resetPassword };