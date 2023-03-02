class Node
{
    constructor(data)
    {
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

b.prev = a;
c.prev = b;
d.prev = c;
e.prev = d;
f.prev = e;

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
