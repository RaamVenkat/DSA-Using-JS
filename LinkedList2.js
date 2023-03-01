class Node
{
    constructor(data)
    {
        this.value = data;
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
        let node = new Node(data);
        if(this.head == null)
        {
            this.head = node;
        }
        else
        {
            let current = this.head;
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
        if((index<0 || index>this.size) || (this.head == null)) return;
        if(index == 0)
        {
            this.InsertFirst(data);
            return;
        }
        let node = new Node(data);
        let current = this.head;
        for(let i=1;i<index;i++)
        {
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
        this.size++;
    }

    RemoveAt(index)
    {
        if(index<0 || index>this.size) return;
        if(index == 0)
        {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let previous,current=this.head;
        for(let i=0;i<index;i++)
        {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    UpdateAt(data,index)
    {
        if(index<0 || index>this.size) return;
        if(index == 0) return this.head.value = data;
        let current = this.head;
        for(let i=1;i<index;i++)
        {
            current = current.next;
        }
        current.value = data;
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
        this.head = previous;
    }

    GetAt(index)
    {
        if(index<0 || index>this.size) return;
        if(index == 0) return console.log(this.head.value);
        let current = this.head;
        for(let i=0;i<index;i++)
        {
            current = current.next;
        }
        return console.log(current.value);
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
ll.InsertFirst("F");
ll.InsertAt("K",3);
ll.GetAt(3);
console.log("---");
ll.PrintList();
console.log("---");
ll.RemoveAt(3);
ll.PrintList();
console.log("---");
ll.ReverseList();
ll.PrintList();
console.log("---");
ll.RemoveAt(5);
ll.UpdateAt("F",5)
ll.PrintList();
