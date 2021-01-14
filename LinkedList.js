class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        if(this.head===null){
            this.head = new Node(data);
            return;
        }
        let cur = this.head;
        while(cur.next!==null){
            cur = cur.next;
        }
        cur.next = new Node(data);
    }

    isEmpty(){
        return this.head === null;
    }

    remove(index = this.size()){
        let cur = this.head;
        let removedData;
        for(let i = 0; i<index-1; i++){
            cur = cur.next;
        }
        removedData = cur.next.data;
        cur.next = cur.next.next;
        return removedData;
    }

    size(){
        let size = 0;
        let cur = this.head;
        while(cur!==null){
            cur = cur.next;
            size++;
        }
        return size;
    }

    printList(){
        let cur = this.head;
        while(cur!==null){
            console.log(cur.data);
            cur = cur.next;
        }
    }
}

class Node{
    constructor(data=null) {
        this.data = data;
        this.next = null;
    }
}

let myList = new LinkedList();

export default LinkedList