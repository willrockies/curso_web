#Tempo quadrático O (n^2)
# O algoritmo é considerado com complexidade quadrática quando tem a necessidade de perormar uma operação de tempo 
# linear para cada valor dentro dos dados de entrada. Dica: Normalmente, quando tem um "for" dentro de outro.
# bastante lento - usando no array ou força bruta

def find_common_elements(list1, list2):
    result = []
    for item1 in list1:
        for item2 in list2:
            if item1 == item2:
                result.append(item1)
    return result


list1 = [11,12,13,14,15]
list2 = [98,87,65,54,15,13]

print(find_common_elements(list1, list2))