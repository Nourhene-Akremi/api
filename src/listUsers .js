import React from 'react';

function listUsers ({user}) {
    console.log(user)
  return <div card>
    <img src="https://fsa.zobj.net/crop.php?r=5OG8pMm3xxDomGGSUfOwV1pnA3SyHfLwdqldj8G-dN0TFRkd70AccysKz4xQyJLFFzZwd6ZLPAEbjT5y71sveigvz-ltfxLgWqwIT9zPVrMNVN1ljfEkTwGsX2F-LUjS3Z43j0HrCcp_g-EQktMm9IMQS6QuOMGhABAXs0m7R2URfWQtwSKucjzxvBydxI70AwZN9wzaYfMXoKiZ" alt="hope" />
     <ul>
         <li className='card-name'>{user.name} </li>
         <li className='card-email'>{user.email}</li>
         <li className='card-adresse'>{user.address}</li>
         <li className='card-username'>{user.username}</li>
     </ul>
  </div>;
}

export default listUsers ;
