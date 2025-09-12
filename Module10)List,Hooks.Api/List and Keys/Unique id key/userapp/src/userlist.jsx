import React from "react";


 function userlist(){

     const users = [
    { id: 101, name: "Alice", age: 25 },
    { id: 102, name: "Bob", age: 30 },
    { id: 103, name: "Charlie", age: 28 },
    { id: 104, name: "Diana", age: 22 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User List</h2>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id} className="text-lg">
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
