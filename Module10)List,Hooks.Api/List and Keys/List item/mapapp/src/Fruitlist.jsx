import React from "react";




 function fruitlist(){

    const fruits =[


    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Grapes" },
    ];
    
      return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Fruit List</h2>
      <ul className="list-disc pl-6">
        {fruits.map((fruit) => (
          <li key={fruit.id} className="text-lg">
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
       
       export default fruitlist;

    
