#Tempo exponencial O (2^n)
#Um algoritmo é considerado com tempo exponencial quando o crescimento do tempo dobra para cada item adicionado
# aos dados de entrada. Este tipo de complexidade é muito vista em algoritmos de força bruta.

def fibonacci(num):
  if num <= 1:
    return num
  return fibonacci(num - 2) + fibonacci(num - 1)

# print(fibonacci(8))
# print(fibonacci(1))
# print(fibonacci(0))
print(fibonacci(3))