/*
The == operator compares objects by identity.
But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value
or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that)
or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

// --- MY WAY --- //
function deepEqual(o1, o2) {
  if (Object.keys(o1).length != Object.keys(o2).length) return false
  
  for (let tag in o1) {
    if (typeof(o1[tag]) !== typeof(o2[tag])) return false

    if (typeof(o1[tag]) == "object") {
      if (!deepEqual(o1[tag], o2[tag])) return false
    } else {
      if (o1[tag] !== o2[tag]) return false
    }
  }
  return true;
}

// --- SOLUTION --- //
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;
  
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// A MI ME GUSTA MÁS EL MÍO, LA SOLUCIÓN PARECE UNA PORQUERÍA >_>
