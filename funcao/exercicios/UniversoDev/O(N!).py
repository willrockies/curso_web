# Tempo fatorial O (n!)
# Um algoritmo é dito como tempo fatorial quando ele cresce de forma fatorial baseado nos dados de entrada.

# n = 8
# n! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1  
def factorial(max_number):
    for each in range(max_number):
        #print(each)
        return factorial(max_number - 1)
print(factorial(8))