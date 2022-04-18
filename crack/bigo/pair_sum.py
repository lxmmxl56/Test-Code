import sys

def main(n):
    res = pair_sum_seq(n)
    print('res')
    print(res)

def pair_sum_seq(n):
    sum = 0
    for i in range(1, n):
        print('range')
        print(i)
        sum += pair_sum(i, i + 1)
        print('sum')
        print(sum)
    return sum

def pair_sum(a, b):
    print('sum')
    print(a)
    print(b)
    return a + b

if __name__ == '__main__':
    n = int(sys.argv[1])
    main(n)
