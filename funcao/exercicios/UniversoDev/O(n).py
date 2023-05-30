
#Tempo linear O(n)
#Quando o tempo de execução do algoritmo aumenta da mesma forma que os dados de entrada, 
#consideramos que o tempo é linear O(n).

def print_items(my_array): # my_array seria O(my_array) ou O(N) 
    for item in my_array:
        print(item)

def find_max(my_array):
    max = 0
    for item in my_array:
        if item > max:
            max = item
    return max

def find_sum(my_array):
    sum = 0
    for item in my_array:
        sum += item
    return sum

print_items([1,2,3,4,5])
print(find_max([1,2,3,4,5]))
print(find_sum([1,2,3,4,5]))