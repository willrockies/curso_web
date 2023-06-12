import unittest


class Node:
    def __init__(self, value):
        self.next = None
        self.value = value


class LinkedList:
    def __init__(self):
        self._head = Node(None)

    def insert_node_to_tail(self, node):
        self.tail().next = node

    def insert_node_to_head(self, node):
        if self._head.next:
            head_element = self._head
            node.next, head_element.next = head_element.next, node
          
        self._head.next = node

    def is_empty(self):
        return self._head.next is None

    def head(self):
        return self._head.next

    def tail(self):
        pointer = self._head
        while pointer.next:
            pointer = pointer.next
        
        return pointer
            