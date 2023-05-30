# extraindo metrica

def find_sum(my_array):
    sum = 0
    for item in my_array:
        sum += item
    return sum

print (find_sum([1,2]))
print (find_sum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

## T = an + b
# onde b é tempo constante ou seja o tempo do valor não muda ex: sum
# an "n" -> tamanho do valor de entrada no caso my_array e "a" o tempo constante 
# Valor de entrada my_array pode ser my_array 1 elemento ou 1000 elementos
# removendo o coeficiente que não muda no caso "b" e "a"
# T = an + b -> T = 1n -> temos o O(n)


#Conclusão ao Big(O)
# Análise de algoritmos pode ser complicado no início, 
# mas é uma das ferramentas importantes que pode te ajudar em toda a sua carreira. Vamos falar sobre isso e como podemos treinar no dia-a-dia e como usar para otimizar diversos algoritmos.