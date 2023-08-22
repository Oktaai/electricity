import {useState} from 'react';




function Counter({firstName = 'Oktai', lastName='Huseinov', age=34, children}){
    const [newAge, setNewAge] = useState(age);
   
    const title = 'Counter Component';

    const ButtonAdd = () => <button onClick={()=>setNewAge(newAge + 1)}>+</button>
    const ButtonMin = () => <button onClick={()=>setNewAge(newAge - 1)}>-</button>

    return(
        <div>
            <div>{title}</div>
            <div>First name: {firstName}</div>
            <div>Last name: {lastName}</div>
            <div>Age: {age}</div>
            <div>New age: 
                <ButtonMin/>
                {newAge}
                <ButtonAdd/>
            </div>    
           
            {children}
        </div>
    )
}

// Counter.defoultProps = {
//     name: 'Oktay',
//     lastName: 'Huseynov',
//     age: 24,
// };

export default Counter;

