class Tree {

}

class Node {
  constructor(value=null, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const testTree = new Tree(new Node(10));
const vals1 = [11, 12, 9, 1, 3, 22, 18, 23, 2, 5, 7, 6, 19];

testTree.insert(9);
testTree.insert(11);
testTree.insert(8);
testTree.insert(12);
testTree.insert(7);
testTree.insert(13);
