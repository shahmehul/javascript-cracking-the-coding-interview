class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;
        this.keyMap = new Map(); // key -> {value, freq}
        this.freqMap = new Map(); // freq -> Set (ordered keys)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.keyMap.has(key)) return -1;

        const node = this.keyMap.get(key);
        this._updateFrequency(key, node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.capacity <= 0) return;

        if (this.keyMap.has(key)) {
            const node = this.keyMap.get(key);
            node.value = value;
            this._updateFrequency(key, node);
        } else {
            if (this.size >= this.capacity) {
                this._evict();
            }
            
            const newNode = { value, freq: 1 };
            this.keyMap.set(key, newNode);
            this._addToFreqMap(1, key);
            this.minFreq = 1;
            this.size++;
        }
    }

    _updateFrequency(key, node) {
        const oldFreq = node.freq;
        const newFreq = oldFreq + 1;
        node.freq = newFreq;

        // Remove from old frequency set
        const oldSet = this.freqMap.get(oldFreq);
        oldSet.delete(key);
        
        // If the minFreq set is empty, increment minFreq
        if (oldFreq === this.minFreq && oldSet.size === 0) {
            this.minFreq++;
        }

        this._addToFreqMap(newFreq, key);
    }

    _addToFreqMap(freq, key) {
        if (!this.freqMap.has(freq)) {
            this.freqMap.set(freq, new Set());
        }
        // Using a Set as an ordered list (keys are evicted in insertion order)
        this.freqMap.get(freq).add(key);
    }

    _evict() {
        const lfuSet = this.freqMap.get(this.minFreq);
        // The first key in the Set is the oldest (LRU among same frequency)
        const keyToRemove = lfuSet.values().next().value;
        
        lfuSet.delete(keyToRemove);
        this.keyMap.delete(keyToRemove);
        this.size--;
    }
}

// Assuming your class is named LFUCache
const cache = new LFUCache(2); // Capacity of 2

console.log("--- Starting LFU Tests ---");

// 1. Basic Put & Get
cache.put(1, 1);

console.log(cache.freqMap);       // Returns 1 (freq of key 1 is now 2)
console.log(cache.keyMap);       // Returns 1 (freq of key 1 is now 2)
cache.put(2, 2);
console.log(cache.freqMap);       // Returns 1 (freq of key 1 is now 2)
console.log(cache.keyMap); 
console.log(cache.get(1)); 
console.log(cache.freqMap);       // Returns 1 (freq of key 1 is now 2)
console.log(cache.keyMap);       // Returns 1 (freq of key 1 is now 2)

// 2. Frequency-based Eviction
// Key 1 has freq 2, Key 2 has freq 1. 
// Adding Key 3 should evict Key 2 (lowest frequency).
cache.put(3, 3);        
console.log(cache.freqMap);       // Returns 1 (freq of key 1 is now 2)
console.log(cache.keyMap); 

console.log(cache.get(2));       // Returns -1 (not found)
console.log(cache.get(3));       // Returns 3 (freq of key 3 is now 2)

// 3. LRU Tie-breaker
// Both Key 1 and Key 3 have freq 2. 
// Key 1 was accessed first (LRU), Key 3 was accessed most recently.
// Adding Key 4 should evict Key 1.
cache.put(4, 4);                 
console.log(cache.get(1));       // Returns -1 (not found)
console.log(cache.get(3));       // Returns 3
console.log(cache.get(4));       // Returns 4

// 4. Update Existing Key
// Updating Key 4 shouldn't change size, but should increase its frequency.
cache.put(4, 40);
console.log(cache.get(4));       // Returns 40

console.log("--- Tests Completed ---");

