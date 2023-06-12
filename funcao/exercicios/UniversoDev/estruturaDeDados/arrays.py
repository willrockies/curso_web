my_array = [1,2,3,4,'teste', False, True, 0.1]
print(my_array[0])
print(my_array[-1])
print(my_array[1:3])

print(len(my_array))

print(len(my_array)-1)

#my_array.sort()

my_array = [7,6,5,4,3,2,1]
my_array.sort()
print('my array sort',my_array)
my_array_sorted = [7,6,5,4,3,2,1]
print('my array sorted',sorted(my_array_sorted))

print(my_array_sorted)
print(my_array)

my_array.insert(0,999)
print('insert on specific position',my_array)
my_array.append(456)
print('insert on last position',my_array)

my_array.remove(999)
print('remove value', my_array)

my_array[1] = None
print("none position", my_array)

del my_array[1]
print('del array element', my_array)

print('minimum value ', min(my_array))
print('minimum value ', max(my_array))

import bisect

print ('search for specific element and its position',bisect.bisect(my_array, 5)) #O(log n)
print(bisect.insort(my_array, 888))
print ('search for specific element and its position',bisect.bisect(my_array, 888)) #O(log n)

my_array = range(100)
range(0,100)

print('range list', list(my_array))

two_dimensions_array = [[123,456],[789,321]]
print('two dimensions array', two_dimensions_array)


print('two dimensions array', two_dimensions_array[0][0])

print('first row dimensions array', two_dimensions_array[0])
print('second row dimensions array', two_dimensions_array[0])

a = [1,2,3]
b = a
print(a)
print(b)
b[0]=999
print('point ', b)
print('point reflect B', a)

a = [1,2,3]
b = list(a)
b[0] = 999
print('',a)
print('copy', b)

a = [{'test': 123, 'bbb': 456}]
print('a',a)

b = a
b[0]['test']= 999
print('a',a)
print('b',b)


import copy
b = copy.copy(a)
print('a copy', a)
a = [{'test': 123, 'bbb': 456}]
b = copy.deepcopy(a)
b[0]['test'] = 999

print('deepcopy a',a)
print('deepcopy b',b)

c = [1,2,3,4]
print('before tmp',c)

tmp1 = c[1]
tmp2 = c[2]
c[2] = tmp1
c[1] = tmp2

print('after tmp', c)

c[2], c[1] = c[1],c[2]
print(c)
