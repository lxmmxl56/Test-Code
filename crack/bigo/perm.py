import sys

def main(n):
    chars = list(n)
    sol = []
    print(chars)
    for char in chars:
        print('char', char)
        others = []
        for i in range(0, len(n)):
            other = n[i]
            if char == other:
                print('skip', char)
                continue
            else:
                others.append(other)
        print('others', others)
        # newSol = sol.copy()
        # for perm in sol:
        #     print(perm)
        #     newSol.remove(perm)
        #     res = perm
        #     for i in range(0, len(perm) + 1):
        #         res = res[:i] + char + res[i:]
        #         print(res)
        #         newSol.add(res)
        #     sol = newSol
        #     print(sol)
    print(sol)

def permute(n, char):
    res = n
    for i in range(0, len(n) + 1):
        res = res[:i] + char + res[i:]
    return res

if __name__ == '__main__':
    n = sys.argv[1]
    main(n)
