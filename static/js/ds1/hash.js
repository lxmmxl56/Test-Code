'use strict';

export class hashTableEntry {
  constructor(key, value, next=null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
  toString() {
    return `hashTableEntry: ${this.key}->${this.value} next: ${this.next}`
  }
}

export class hashTable {
  constructor(length=4, fill=.8, growth=2) {
    this.count = 0;
    this.store = new Array(length);
    this.fill = fill;
    this.growth = growth;
  }
  toString() {
    return `hashTable: ${this.count}/${this.store.length}`
  }
  hash(value) {
    if (!(value instanceof String)) {
      value = String(value);
    }
    var hash = 0;
    for (var i = 0; i < value.length; i++) {
      var char = value.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = Math.abs(hash & hash); // Convert to 32bit integer
    }
    return hash;
  }
  getIndex(value, length) {
    const hash = this.hash(value);
    return hash % length;
  }
  * enumerate(verbose=false) {
    if(verbose) {
      console.log('htEnumerate')
    }
    let idx = 0;
    while (idx < this.store.length) {
      let current = this.store[idx];
      if (current) {
        if(verbose) {
          console.log('idx', idx);
        }
        yield current;
        while (current.next) {
          if(verbose) {
            console.log('next')
          }
          current = current.next;
          yield current;
        }
      }
      idx++;
    }
  }
  checkForGrowth() {
    if (this.count + 1 >= Math.round(this.store.length * this.fill)) {
      console.log('grow');
      const newStore = new Array(this.store.length * this.growth);
      const gen = this.enumerate();
      for (const entry of gen) {
        this.#doAdd(entry.key, entry.value, newStore);
      }
      this.store = newStore;
    }
  }
  #doAdd(key, value, store=this.store) {
    const index = this.getIndex(key, store.length);
    const hte = new hashTableEntry(key, value);
    if (!store[index]) {
      store[index] = hte;
    } else {
      let current = store[index];
      while (current.next) {
        current = current.next;
      }
      current.next = hte;
    }
  }
  add(key, value) {
    this.checkForGrowth();
    this.#doAdd(key, value)
    this.count++;
  }
  find(key, toRemove=false) {
    const idx = this.getIndex(key, this.store.length);
    let current = this.store[idx];
    if (current) {
      if (current.key === key) {
        if (toRemove) {
          return [current, idx, null];
        }
        return current;
      } else {
        while (current.next) {
          let previous = current;
          current = current.next;
          if (current.key === key) {
            if (toRemove) {
              return [current, idx, previous];
            }
            return current;
          }
        }
      }
    }
    if (toRemove) {
      return [null, null, null];
    }
    return null;
  }
  remove(key) {
    const [toRemove, idx, parent] = this.find(key, true)
    if (toRemove) {
      if (!parent) {
        this.store[idx] = undefined;
      } else {
        if (toRemove.next) {
          parent.next = toRemove.next;
        } else {
          parent.next = undefined;
        }
      }
      return --this.count;
    }
  }
}
