# import gc
import os
import random
import sys
# import timeit
from ..timer import timer


def main(n):
    my_list = make_list(n)
    # print(my_list)
    print('baby')
    res = baby(my_list)
    print(res)
    print('mama')
    res = mama(my_list)
    print(res)
    if len(my_list) <= 1000:
        print('papa')
        res = papa(my_list)
        print(len(res))
    else:
        print('skipping papa')

    # print('baby')
    # print(timeit.timeit('baby(my_list)', globals=globals(), setup='gc.enable(); my_list = make_list(n)'))
    # print('mama')
    # print(timeit.timeit('mama(my_list)', globals=globals(), setup='gc.enable(); my_list = make_list(n)'))
    # print('papa')
    # print(timeit.timeit('papa(my_list)', globals=globals(), setup='gc.enable(); my_list = make_list(n)'))


def make_list(n):
    num_list = []
    for count in range(n):
        num_list.append(random.randint(0, 9))
    return num_list


@timer
def baby(n):
    return 1 + n[0]


@timer
def mama(n):
    return sum(n)


@timer
def papa(n):
    pairs = []
    for item in n:
        for pair in n:
            pairs.append([item, pair])
    return pairs


if __name__ == '__main__':
    n = int(sys.argv[1])
    main(n)
