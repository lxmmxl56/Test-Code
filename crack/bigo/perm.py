import sys

def main(n):
    res = permute(n)
    print(res)

def permute(n):
    if len(n) <= 1:
        return [n]
    chars = list(n)
    sol = []
    for idx, char in enumerate(chars):
        others = []
        for i in range(0, len(n)):
            other = n[i]
            if idx == i:
                continue
            else:
                others.append(other)
        others = ''.join(others)
        permutations = permute(others)
        for perm in permutations:
            sol.append(char + perm)
    return sol

if __name__ == '__main__':
    n = sys.argv[1]
    main(n)
