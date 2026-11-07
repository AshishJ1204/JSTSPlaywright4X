{
    console.log(a);
    let a = 10;
}
// gives an error 'ReferenceError: Cannot access 'a' before initialization'

// enter a block
//  ↓
// a is created ✅
// if a -> var-> undefined
// if a -> let -> no value
// a has NO value yet ❌

console.log(a); // Error TDZ (let, const), Var => undefined
// let, const will go in TDZ (Temporal Dead Zone) with no value.
// var will go in TDZ (Temporal Dead Zone) with undefined value.

let a = 10;
//  ↓
// a = 10 ✅