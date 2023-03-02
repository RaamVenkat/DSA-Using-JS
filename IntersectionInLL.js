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
const f = new Node("F");
const g = new Node("G");

const h = new Node("H");
const i = new Node("I");


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

h.next = i;
i.next = e;

function PrintList(head)
{
    let current = head;

    while(current)
    {
        console.log(current.value);
        current = current.next;
    }
}

function Intersection(head1,head2)
{
    let current1 = head1;
    let current2 = head2;

    while(current1.next)
    {
        current1 = current1.next;
    }
    
    current1.next = head1;

    var slow=fast=head2;

    while((fast != null) && (fast.next != null))
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
        {
            slow=head2;
            while(slow != fast)
            {
                slow = slow.next;
                fast = fast.next;
            }
            console.log("Intersection at",slow.value);
            current1.next = null;
            return 1;
        }
    }
    return 0;
}

Intersection(a,h);
PrintList(a);
console.log("---");
PrintList(h);
//CheckLoop(a);