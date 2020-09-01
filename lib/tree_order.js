function inOrderArray(root) {
  // if the root is null, return an empty array
  if(!root) {
    return [];
  }
  // get the array for visiting the left node
  // get the array for visiting the right node
  if(!root.left && !root.right) {
    return root.val;
  }
  let leftArr = [];
  let rightArr = [];

  if(root.left) {
    leftArr = inOrderArray(root.left);
  }
  if(root.right) {
    rightArr = inOrderArray(root.right);
  }


  // return the left array concatenated with the root value
  //   concatenated with the right array
  
  return [...leftArr, root.val, ...rightArr];
}

function postOrderArray(root) {
  if (!root) {
    return [];
  }
  if (!root.left && !root.right) {
    return root.val;
  }
  let leftArr = [];
  let rightArr = [];

  if (root.left) {
    leftArr = postOrderArray(root.left);
  }
  if (root.right) {
    rightArr = postOrderArray(root.right);
  }

  // return the left array concatenated with the right array
  //   concatenated with the root value
  return [...leftArr, ...rightArr, root.val];
}


module.exports = {
  inOrderArray,
  postOrderArray
};
