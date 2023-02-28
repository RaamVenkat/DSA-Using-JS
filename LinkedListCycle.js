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


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = a;

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
    if(head == null) return 0;
    var s=f=head;

    while((f != null) && (f.next != null))
    {
        s = s.next;
        f = f.next.next;
        if(s == f)
        {
            s=head;
            while(s != f)
            {
                s = s.next;
                f = f.next;
            }
            console.log("Loop Exists at",s.value);
            return 1;
        }
    }
    return 0;
}
PrintList(a);
//CheckLoop(a);