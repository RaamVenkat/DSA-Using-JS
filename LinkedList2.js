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

    EvenOdd()
    {
        let odd=this.head,even=this.head.next,eh=even;
        while(odd)
        {
            if(odd == null || even == null || even.next == null )
            {
                odd.next = eh;
                return;
            }
            odd.next = even.next;
            odd = odd.next
            if(odd.next == null)
            {
                even.next = null;
                odd.next = eh;
                return;
            }
            even.next = odd.next;
            even = even.next;
        }
    }

    Palindrome()
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
        current = this.head
        while(current)
        {
            if(current.value == previous.value)
            {
                current = current.next;
                previous = previous.next;
            }
            else
            {
                return console.log("Not Palindrome");
            }
        }
        return console.log("Palindrome");
    }
}

const PrintData = (head) =>{
    if(head == null) return;
    console.log(head.value);
    PrintData(head.next);
  }

const ll = new LinkedList();
ll.Insert("A");
ll.Insert("B");
ll.Insert("C");
ll.Insert("D");
ll.Insert("C");
ll.Insert("B");
ll.Insert("A");
ll.PrintList();
console.log("---");
ll.EvenOdd();
ll.Palindrome();