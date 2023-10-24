using System;
using System.Collections.Generic;

class Node
{
    public int Value;
    public Node Left;
    public Node Right;

    public Node(int value)
    {
        Value = value;
        Left = null;
        Right = null;
    }
}

class BinarySearchTree
{
    private Node root;

    public void Insert(int value)
    {
        root = Insert(root, value);
    }

    private Node Insert(Node node, int value)
    {
        if (node == null)
        {
            return new Node(value);
        }

        if (value < node.Value)
        {
            node.Left = Insert(node.Left, value);
        }
        else if (value > node.Value)
        {
            node.Right = Insert(node.Right, value);
        }

        return node;
    }

    public void InOrderTraversal(List<int> values, Node node)
    {
        if (node != null)
        {
            InOrderTraversal(values, node.Left);
            values.Add(node.Value);
            InOrderTraversal(values, node.Right);
        }
    }

    public Node ConvertToBalancedBST(List<int> sortedValues, int start, int end)
    {
        if (start > end)
        {
            return null;
        }

        int mid = (start + end) / 2;
        Node newNode = new Node(sortedValues[mid]);

        newNode.Left = ConvertToBalancedBST(sortedValues, start, mid - 1);
        newNode.Right = ConvertToBalancedBST(sortedValues, mid + 1, end);

        return newNode;
    }

    public void BalanceBST()
    {
        List<int> sortedValues = new List<int>();
        InOrderTraversal(sortedValues, root);

        root = ConvertToBalancedBST(sortedValues, 0, sortedValues.Count - 1);
    }

    public void PrintInOrderTraversal(Node node)
    {
        if (node != null)
        {
            PrintInOrderTraversal(node.Left);
            Console.Write(node.Value + " ");
            PrintInOrderTraversal(node.Right);
        }
    }

    public static void Main(string[] args)
    {
        BinarySearchTree bst = new BinarySearchTree();

        // Insert values into the BST
        bst.Insert(1);
        bst.Insert(2);
        bst.Insert(3);
        bst.Insert(4);
        bst.Insert(5);

        Console.WriteLine("In-order traversal of the original BST:");
        bst.PrintInOrderTraversal(bst.root);
        Console.WriteLine();

        // Balance the BST
        bst.BalanceBST();

        Console.WriteLine("In-order traversal of the balanced BST:");
        bst.PrintInOrderTraversal(bst.root);
    }
}
