class Node
{
    constructor(data)
    {
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    Insert(data)
    {
        let node = new Node(data);
        if(this.head == null)
        {
            this.head = node;
            this.last = node;
        }
        else
        {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        }
        this.size++;
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

    ReversePrint()
    {
        let current = this.last;
        while(current)
        {
            console.log(current.value);
            current = current.prev;
        }
    }

    Traverse()
    {
        let num = 632,count=0;
        let current = this.head;
        let rem = num%10;
        while(current)
        {
            current = current.next;
            count++;
            if(current.value == rem)
            {
                count = 0;
            }
        }
    }
  
}

const ll = new LinkedList();
ll.Insert(1);
ll.Insert(2);
ll.Insert(3);
ll.Insert(4);
ll.Insert(5);
ll.Insert(6);
ll.PrintList();
console.log("---")
ll.ReversePrint();