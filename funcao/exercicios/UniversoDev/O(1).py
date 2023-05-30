# tempo constante
# Quando o tempo de execução do algoritmo é totalmente independente dos dados de entrada,
# consideramos que o tempo é constante O(1).

import queue

def example_1():
    print('Hello world')

example_1()

def example_2(n):
    return n
print(example_2([1,2,3]))

def example_3(data):
    return data[0]

print(example_3(["wilson", "Alves", "da", "Silva"]))

def example_4():
    my_queue = queue.Queue()
    my_queue.put(1)

print(example_4())