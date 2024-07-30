function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
}

function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1){
      return undefined;
    }
    return usersArray.splice(foundIndex,1);
}
