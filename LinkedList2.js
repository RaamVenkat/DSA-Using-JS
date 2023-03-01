class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    InsertFirst(data)
    {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    Insert(data)
    {
        if(this.head == null) return;
        let node = new Node(data);
        let current;
        if(!this.head)
        {
            this.head = node
        }
        else
        {
            current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    InsertAt(data,index)
    {
        if((index<0 || index>this.size) && (this.head == null)) return;
        if(index == 0) return this.InsertFirst(data);
        let node = new Node(data)
        let previous,current=this.head;
        for(let i=0;i<index;i++)
        {
            previous = current;
            current = current.next;
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }

    GetAt(index)
    {
        if(index<0 || index>this.size) return;
        if(index == 0) return console.log(this.head.value);
        let current = this.head;
        for(let i=0;i<=index;i++)
        {
            if(i == index) return console.log(current.value);
            current = current.next;
        }
    }

    RemoveAt(index)
    {
        if(index<0 || index>this.size) return;
        if(index == 0) 
        {
            this.size--; 
            this.head = this.head.next;
            return;
        }
        let previous=null,current=this.head;
        for(let i=0;i<index;i++)
        {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    DeleteList()
    {
        this.head = null;
        this.size = 0;
    }

    ReverseList()
    {
        if(this.head == null) return;
        let previous=null,current=this.head,nn=null;
        while(current)
        {
            nn = current.next;
            current.next = previous;
            previous = current;
            current = nn;
        }
        this.head = nn;
    }

    PrintList()
    {
        let current = this.head;
    
        while(current)
        {
            console.log(current.value);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.Insert("A");
ll.Insert("B");
ll.Insert("C");
ll.Insert("D");
ll.Insert("E");
ll.Insert("F");
ll.Insert("G");
ll.InsertFirst("H");
//ll.InsertAt("K",3);
ll.PrintList();
//console.log("----");
//ll.GetAt(5);
//ll.RemoveAt(0);
//console.log("----");
//ll.PrintList();
//console.log("----");
//ll.RemoveAt(2);
//ll.PrintList();
//console.log("----");
//ll.ReverseList();
//ll.PrintList();


function CheckLoop(head)
{
    if(head == null) return 0;
    var slow=fast=head;

    while((fast != null) && (fast.next != null))
    {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
        {
            //console.log("Loop exists at",slow.value);
            //return 1;
            slow=head;
            if(slow != fast)
            {
                while(slow.next != fast.next)
                {
                    slow = slow.next;
                    fast = fast.next;
                }
                fast.next = null;
            }
            else
            {
                while(fast.next != slow)
                {
                    fast = fast.next
                }
                fast.next = null;
            }
        }
    }
    return 0;
}

function ReverseList(head)
{
    if(head == null) return;
    prev = null;
    current = head;
    nn = null;
    while(current)
    {
        nn = current.next;
        current.next = prev;
        prev = current;
        current = nn;
    }
}
//PrintList(a);
//CheckLoop(a);
//ReverseList(a);
//PrintList(h);