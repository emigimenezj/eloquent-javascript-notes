/*
Make the Group class from the previous exercise iterable.
Refer to the section about the iterator interface earlier in the chapter
if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return
the iterator created by calling the Symbol.iterator method on the array.
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/


// --- MY WAY AND THE SOLUTION --- //
class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (!this.has(value))
      this.members.push(value);
  }
  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }
  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection)
      group.add(value);
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.pos = 0;
  }

  next() {
    if (this.pos >= this.group.members.length) {
      return {done: true};
    } else {
      let res = {value: this.group.members[this.pos],
                    done: false};
      this.pos++;
      return res;
    }
  }
}

for (let value of Group.from(["a", "b", "c", "d"])) {
  console.log(value);
}
// → a
// → b
// → c
