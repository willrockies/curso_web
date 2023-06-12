s = 'minha primeira string'
print(s)

s = 'teste' * 10
print('string * 10', s)

substitiuir = 'algomania'.replace('mania', 'replace')
print(substitiuir)

minusculo = 'algoMania'.lower()

print('minusculo', minusculo)

mauisculo = 'algomania'.upper()
print('mauisculo', mauisculo)

comeca_com = 'algomania'.startswith('algo')
print('comeca_com', comeca_com)

comeca_com = 'algomania'.startswith('mania')
print('comeca_com', comeca_com)


termina_com = 'algomania'.endswith('mania')
print('termina_com', termina_com)
termina_com = 'algomania'.endswith('algo')
print('termina_com', termina_com)
d = 'teste1, teste2, teste3'


print('separa string em um array', d.split(','))
print('tira espaco', ' teste '.strip())
print('tira espaco na esquerda', ' teste '.lstrip())
print('tira espaco na direita', ' teste '.rstrip())
print('inicia com maiuscula', 'teste'.title())
s = '0918273645'
print('primeiro valor da string',s[0])
print('quinto elemento', s[5])
print('cinco primeiros elementos',s[0:5])
print('invertendo string', s[::-1])
