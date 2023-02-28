class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const g = new Node("G");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = g;
g.next = a;

function PrintList(head)
{
    if(CheckLoop(head))
    {
        return 0;
    }
    let current = head;

    while(current)
    {
        console.log(current.value);
        current = current.next;
    }
}

function CheckLoop(head)
{
    if(head == null) return false;
    var s=head,f=head.next

    while(f)
    {
        if((f == null) || (f.next == null))
        {
            return 0;
        }
        if(s == f)
        {
            console.log("Loop Exists")
            return 1;
        }
        s = s.next;
        f = f.next.next;
    }
    return 1;
}

PrintList(a);
//CheckLoop(a);