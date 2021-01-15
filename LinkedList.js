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

    get(index){
        try {
            let cur = this.head;
            for(let i=0; i<index; i++){
                cur = cur.next;
            }
            return cur.data;
        } catch (error) {
            return -1;
        }
    }

    isEmpty(){
        return this.head === null;
    }

    remove(index = this.size()){
        let removedData;
        if(index===0){
            removedData = this.head.data;
            this.head = this.head.next;
            return removedData;
        }
        let cur = this.head;
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

    forEach(callback){
        let cur = this.head;
        while(cur!=null){
            callback(cur.data);
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

export default LinkedList;