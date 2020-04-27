import React from 'react';
import IndividualUser from './IndividualUser/IndividualUser';

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
    favoriteMovie: 'Planet Earth'
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
    favoriteMovie: 'Planet Earth'
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
    favoriteMovie: 'Get Out'
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
    favoriteMovie: 'Selma'
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
    favoriteMovie: 'Get Out'
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
    favoriteMovie: 'Forrest Gump'
  },
};

// convert object into array
const userObj = Object.keys(users).map(i => users[i]);

 
 
const userNames = (props) => {
  return (
    <div className="userName">
      {/* {userObj.map(user => user.name)} */}
      {userObj.map(user => {
        return (
          <IndividualUser
            key={user.id}
            name={user.name}
            username={user.userName}
            favoriteMovie={user.favoriteMovie} />
        )
      })}
    </div>
  );
};

/* Note, use inspect to see what the list is rendered.
Sometimes you will have all the data in one list. Notice
the pattern if you want each iteration to be its own list
item, then you will need to encapsulate the first argument
for example, (user)


*/

export default userNames;