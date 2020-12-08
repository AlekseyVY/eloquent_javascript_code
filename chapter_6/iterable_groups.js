// about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by 
// calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

// // Your code here (and the code from the previous exercise)
class Group {
    constructor() {
      this.group = []
    }
  
    add(value) {
      if (this.group.indexOf(value) == -1) this.group.push(value);
    }
  
    delete(value) {
      let index = this.group.indexOf(value);
  
      if (index > -1) this.group.splice(index, 1);
    }
  
    has(value) {
      if (this.group.indexOf(value) > -1) return true;
      return false;
    }
  
    static from(values) {
      let from_group = new Group();
  
      for (const value of values) {
        from_group.add(value);
      }
  
      return from_group;
    }
  
    [Symbol.iterator]() {
      let nextIndex = 0, group = this.group;
  
      return {
        next: function () {
          return group.length == nextIndex ?
            { done: true } :
            { value: group[nextIndex++], done: false }
        }
      }
    }
  }
  


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c